import Stripe from "npm:stripe@14";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

const PRODUCTS = {
  gtm: {
    priceId: "price_1TclPKQ67iHZYw6w7k1doUjd",
    name: "GTM Builder",
  },
  bundle: {
    priceId: "price_1TdV6CQ67iHZYw6wxwocN39M",
    name: "Builder Bundle",
  },
};

const ALLOWED_ORIGINS = [
  "https://whitehorselabs.com.au",
  "https://www.whitehorselabs.com.au",
  "https://whitehorselabs.com",
  "https://www.whitehorselabs.com",
  "https://whitehorselabs.base44.app",
  "https://app.base44.com",
];

Deno.serve(async (req) => {
  try {
    const requestOrigin = req.headers.get("origin") || "";
    if (!ALLOWED_ORIGINS.some((o) => requestOrigin.startsWith(o))) {
      console.warn("Blocked request from origin:", requestOrigin);
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    const { product } = await req.json();

    const productConfig = PRODUCTS[product];
    if (!productConfig) {
      return Response.json({ error: "Invalid product" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: productConfig.priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${requestOrigin}/success?session_id={CHECKOUT_SESSION_ID}&product=${product}`,
      cancel_url: `${requestOrigin}/BuyTheBuilderSuite`,
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