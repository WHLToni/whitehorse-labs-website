import Stripe from "npm:stripe@14";
import { createClientFromRequest } from "npm:@base44/sdk@0.8.21";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

const NOTION_LINKS = {
  gtm: "https://fresh-clownfish-6e5.notion.site/The-GTM-Builder-3299886dc21e80609b82c49174f23014",
  bundle: "https://fresh-clownfish-6e5.notion.site/The-GTM-Builder-3299886dc21e80609b82c49174f23014",
};

const PRODUCT_NAMES = {
  gtm: "GTM Builder",
  bundle: "Builder Bundle",
};

Deno.serve(async (req) => {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      sig,
      Deno.env.get("STRIPE_WEBHOOK_SECRET")
    );
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return new Response("Webhook error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const base44 = createClientFromRequest(req);
    const session = event.data.object;
    const product = session.metadata?.product;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || "";
    const stripeCustomerId = typeof session.customer === "string" ? session.customer : "";

    // Get actual amount paid (after any discount)
    const amountTotal = session.amount_total;
    const amountSubtotal = session.amount_subtotal;
    const discountAmount = amountSubtotal - amountTotal;
    const currency = (session.currency || 'aud').toUpperCase();
    const formattedTotal = `${currency} $${(amountTotal / 100).toFixed(2)}`;
    const discountLine = discountAmount > 0
      ? `\nDiscount applied: -${currency} $${(discountAmount / 100).toFixed(2)}\nTotal paid: ${formattedTotal}\n`
      : `\nTotal paid: ${formattedTotal}\n`;

    // Save customer to database (upsert by email)
    if (customerEmail && product) {
      try {
        const existing = await base44.asServiceRole.entities.Customer.filter({ email: customerEmail });
        if (existing && existing.length > 0) {
          await base44.asServiceRole.entities.Customer.update(existing[0].id, {
            purchase_date: new Date().toISOString(),
            product_name: PRODUCT_NAMES[product] || product,
            full_name: customerName || existing[0].full_name,
            stripe_customer_id: stripeCustomerId || existing[0].stripe_customer_id,
          });
        } else {
          await base44.asServiceRole.entities.Customer.create({
            email: customerEmail,
            full_name: customerName,
            purchase_date: new Date().toISOString(),
            product_name: PRODUCT_NAMES[product] || product,
            stripe_customer_id: stripeCustomerId,
          });
        }
        console.log(`Customer saved: ${customerEmail}`);

        // Sync to HubSpot CRM
        try {
          const { accessToken } = await base44.asServiceRole.connectors.getConnection("hubspot");
          const nameParts = customerName.trim().split(" ");
          const firstName = nameParts[0] || "";
          const lastName = nameParts.slice(1).join(" ") || "";
          const productLabel = PRODUCT_NAMES[product] || product;

          // Search for existing contact by email
          const searchRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/search", {
            method: "POST",
            headers: { "Authorization": `Bearer ${accessToken}`, "Content-Type": "application/json" },
            body: JSON.stringify({ filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: customerEmail }] }], limit: 1 })
          });
          const searchData = await searchRes.json();
          const existingContact = searchData.results?.[0];

          const contactProps = {
            email: customerEmail,
            firstname: firstName,
            lastname: lastName,
            lifecyclestage: "customer",
            jobtitle: productLabel
          };

          if (existingContact) {
            await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${existingContact.id}`, {
              method: "PATCH",
              headers: { "Authorization": `Bearer ${accessToken}`, "Content-Type": "application/json" },
              body: JSON.stringify({ properties: contactProps })
            });
            console.log(`HubSpot contact updated: ${customerEmail}`);
          } else {
            await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
              method: "POST",
              headers: { "Authorization": `Bearer ${accessToken}`, "Content-Type": "application/json" },
              body: JSON.stringify({ properties: contactProps })
            });
            console.log(`HubSpot contact created: ${customerEmail}`);
          }
        } catch (hubErr) {
          console.error("HubSpot sync error:", hubErr.message);
        }
      } catch (dbErr) {
        console.error("Customer save error:", dbErr.message);
      }
    }

    if (customerEmail && product && NOTION_LINKS[product]) {
      try {
        const isBundle = product === 'bundle';
        await base44.asServiceRole.integrations.Core.SendEmail({
          to: customerEmail,
          subject: `Your ${PRODUCT_NAMES[product]} — Access Inside`,
          body: `Hi there,

Thank you for purchasing ${PRODUCT_NAMES[product]}!${discountLine}
Here's your access link — click to duplicate the GTM Builder portal into your own Notion workspace:

${NOTION_LINKS[product]}
${isBundle ? "\nProduct Builder: You'll receive a separate email with your Product Builder access link as soon as it launches. No further payment required.\n" : ""}
If you have any questions, reply to this email.

— Toni
Whitehorse Labs`,
        });
        console.log(`Confirmation email sent to ${customerEmail} for ${product}`);
      } catch (emailErr) {
        console.error("Email send error:", emailErr.message);
      }
    }
  }

  return Response.json({ received: true });
});