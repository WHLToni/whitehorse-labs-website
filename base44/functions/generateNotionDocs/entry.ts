import { createClientFromRequest } from "npm:@base44/sdk@0.8.25";

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (user?.role !== "admin") {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection("notion");
    const headers = {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28"
    };

    const { action, parentPageId } = await req.json().catch(() => ({}));

    // Search for accessible pages to use as parent
    if (action === "search") {
      const res = await fetch("https://api.notion.com/v1/search", {
        method: "POST",
        headers,
        body: JSON.stringify({ filter: { value: "page", property: "object" }, page_size: 20 })
      });
      const data = await res.json();
      const pages = (data.results || []).map((p) => ({
        id: p.id,
        title: p.properties?.title?.title?.[0]?.plain_text || p.properties?.Name?.title?.[0]?.plain_text || "Untitled"
      }));
      return Response.json({ pages });
    }

    // Create the documentation page
    if (!parentPageId) {
      return Response.json({ error: "parentPageId is required" }, { status: 400 });
    }

    const now = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });

    const blocks = [
      h2("Overview"),
      para("This document is an auto-generated architecture and setup log for the Whitehorse Labs website. It captures how the app was built, what integrations are active, and how key workflows function."),
      divider(),

      h2("🌐 Pages & Routes"),
      para("The app is a public-facing React website with the following pages:"),
      bullet("/  →  Home — Main landing page with Hero, Credentials, WhoIWorkWith, ChoosePath, ICPCallout, and StartHere sections."),
      bullet("/Services  →  Services & Pricing — Lists fixed-scope consulting engagements with pricing and deliverables."),
      bullet("/BuyTheBuilderSuite  →  Buy the Frameworks — Sales page for the GTM Builder and Builder Bundle digital products."),
      bullet("/Contact  →  Contact Form — Multi-field inquiry form that sends email via Base44 SendEmail integration."),
      bullet("/success  →  Purchase Success — Confirmation page shown post-Stripe checkout with Notion access links."),
      bullet("/admin  →  Admin Dashboard — Password-protected admin panel (admin role required). Shows customer purchases and Google Analytics."),
      divider(),

      h2("💳 Stripe Payment Integration"),
      para("Stripe is configured in Live Mode. Three products are available:"),
      bullet("The GTM OS — AUD $149 (prod_UCQlrXE3h980hM)"),
      bullet("GTM Builder — AUD $349 (prod_UbzO73Hq0GSmIl)"),
      bullet("Builder Bundle — AUD $549 (prod_UckbWUDuTt3Ecf)"),
      para("How it works: When a user clicks 'Buy' on the BuyTheBuilderSuite page, the frontend calls the createCheckoutSession backend function, which creates a Stripe Checkout Session and returns a redirect URL. The user is sent to Stripe's hosted checkout page. On completion, Stripe fires a webhook to the stripeWebhook backend function."),
      para("Secrets used: STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET."),
      divider(),

      h2("🔁 Stripe Webhook — Post-Purchase Automation"),
      para("File: functions/stripeWebhook. Triggered by the checkout.session.completed event. On each successful purchase, the webhook performs three actions in sequence:"),
      numbered("1. Saves/updates the customer in the Base44 Customer database (upserts by email, storing name, product, Stripe customer ID, and purchase date)."),
      numbered("2. Syncs to HubSpot CRM — finds or creates a Contact by email, then creates a new Closed Won Deal with the product name and amount paid, and associates the deal to the contact."),
      numbered("3. Sends a confirmation email to the customer with their Notion product access link using the Base44 SendEmail integration."),
      divider(),

      h2("🟠 HubSpot CRM Integration"),
      para("Connector type: Shared connector (builder's HubSpot account). Authorized scopes: crm.objects.contacts.read, crm.objects.contacts.write, crm.objects.deals.read, crm.objects.deals.write."),
      para("How it works: For every Stripe purchase, the webhook upserts a HubSpot Contact and creates a new Deal (stage: Closed Won, pipeline: default). Each purchase becomes its own Deal record, so repeat customers accumulate a full purchase history on their contact profile. This is the foundation for upselling to consulting services later."),
      para("The access token is retrieved at runtime using base44.asServiceRole.connectors.getConnection('hubspot')."),
      divider(),

      h2("📊 Google Analytics Integration"),
      para("Connector type: Shared connector. Authorized scopes: analytics.readonly. Used in the Admin dashboard (Analytics tab) via the getPageViews backend function, which queries the GA4 Data API for page views and sessions over the last 30 days."),
      divider(),

      h2("🗃️ Database Entities"),
      para("Customer — Stores a record for each purchase. Fields: email (required), full_name, purchase_date (datetime), product_name, stripe_customer_id. Access is restricted to admin role only (list, read, create, update, delete)."),
      divider(),

      h2("📝 Notion Integration"),
      para("Connector type: Shared connector. Authorized scopes: read_content, update_content, insert_content. Used to push this documentation page into the builder's Notion workspace. Triggered manually from the Admin dashboard Docs tab."),
      divider(),

      h2("📁 Backend Functions"),
      bullet("createCheckoutSession — Creates a Stripe Checkout Session for a given product key. Called from BuyTheBuilderSuite page."),
      bullet("stripeWebhook — Handles Stripe checkout.session.completed events. Runs DB save + HubSpot sync + confirmation email."),
      bullet("getPageViews — Fetches GA4 page view data for the Admin analytics tab."),
      bullet("generateNotionDocs — Searches the Notion workspace and creates this documentation page."),
      divider(),

      h2("📅 Last Updated"),
      para(`This document was generated on ${now} from the Whitehorse Labs Admin Dashboard.`)
    ];

    const createRes = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers,
      body: JSON.stringify({
        parent: { type: "page_id", page_id: parentPageId },
        properties: {
          title: { title: [{ type: "text", text: { content: "Whitehorse Labs — App Architecture & Setup Log" } }] }
        },
        children: blocks
      })
    });

    const created = await createRes.json();
    if (created.object === "error") {
      console.error("Notion create error:", JSON.stringify(created));
      return Response.json({ error: created.message }, { status: 400 });
    }

    console.log("Notion doc created:", created.id);
    return Response.json({ success: true, pageUrl: created.url, pageId: created.id });

  } catch (err) {
    console.error("generateNotionDocs error:", err.message);
    return Response.json({ error: err.message }, { status: 500 });
  }
});

// --- Notion block helpers ---
function h2(text) {
  return { object: "block", type: "heading_2", heading_2: { rich_text: [{ type: "text", text: { content: text } }] } };
}
function para(text) {
  return { object: "block", type: "paragraph", paragraph: { rich_text: [{ type: "text", text: { content: text } }] } };
}
function bullet(text) {
  return { object: "block", type: "bulleted_list_item", bulleted_list_item: { rich_text: [{ type: "text", text: { content: text } }] } };
}
function numbered(text) {
  return { object: "block", type: "numbered_list_item", numbered_list_item: { rich_text: [{ type: "text", text: { content: text } }] } };
}
function divider() {
  return { object: "block", type: "divider", divider: {} };
}