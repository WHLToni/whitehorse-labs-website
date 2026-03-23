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
    const session = event.data.object;
    const product = session.metadata?.product;
    const customerEmail = session.customer_details?.email;

    // Get actual amount paid (after any discount)
    const amountTotal = session.amount_total;
    const amountSubtotal = session.amount_subtotal;
    const discountAmount = amountSubtotal - amountTotal;
    const currency = (session.currency || 'aud').toUpperCase();
    const formattedTotal = `${currency} $${(amountTotal / 100).toFixed(2)}`;
    const discountLine = discountAmount > 0
      ? `\nDiscount applied: -${currency} $${(discountAmount / 100).toFixed(2)}\nTotal paid: ${formattedTotal}\n`
      : `\nTotal paid: ${formattedTotal}\n`;

    if (customerEmail && product && NOTION_LINKS[product]) {
      try {
        const base44 = createClientFromRequest(req);
        await base44.asServiceRole.integrations.Core.SendEmail({
          to: customerEmail,
          subject: `Your ${PRODUCT_NAMES[product]} — Access Inside`,
          body: `Hi there,

Thank you for purchasing ${PRODUCT_NAMES[product]}!

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