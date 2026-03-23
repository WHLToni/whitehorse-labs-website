import Stripe from "npm:stripe@14";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

const PRODUCTS = {
  gtm: {
    priceId: "price_1TE0YoKIYCIh7fY32Y3fpNkB",
    name: "The GTM OS",
  },
};

Deno.serve(async (req) => {
  try {
    const { product } = await req.json();

    const productConfig = PRODUCTS[product];
    if (!productConfig) {
      return Response.json({ error: "Invalid product" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "https://app.base44.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: productConfig.priceId, quantity: 1 }],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&product=${product}`,
      cancel_url: `${origin}/GetTheFrameworks`,
      metadata: {
        base44_app_id: Deno.env.get("BASE44_APP_ID"),
        product,
      },
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});