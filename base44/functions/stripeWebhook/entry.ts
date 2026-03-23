import Stripe from "npm:stripe@14";
import { createClientFromRequest } from "npm:@base44/sdk@0.8.21";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

const NOTION_LINKS = {
  gtm: "https://fresh-clownfish-6e5.notion.site/The-GTM-OS-3299886dc21e80609b82c49174f23014?source=copy_link",
};

const PRODUCT_NAMES = {
  gtm: "The GTM OS",
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
      } catch (dbErr) {
        console.error("Customer save error:", dbErr.message);
      }
    }

    if (customerEmail && product && NOTION_LINKS[product]) {
      try {
        await base44.asServiceRole.integrations.Core.SendEmail({
          to: customerEmail,
          subject: `Your ${PRODUCT_NAMES[product]} — Access Inside`,
          body: `Hi there,

Thank you for purchasing ${PRODUCT_NAMES[product]}!${discountLine}
Here's your access link — click to duplicate the portal into your own Notion workspace:

${NOTION_LINKS[product]}

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