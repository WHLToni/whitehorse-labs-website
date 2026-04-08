import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('google_analytics');

    // Find the Whitehorse Labs GA4 property
    const summaryRes = await fetch('https://analyticsadmin.googleapis.com/v1beta/accountSummaries', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const summaryData = await summaryRes.json();

    let propertyId = null;
    // Use www.whitehorselabs.com.au property
    for (const account of (summaryData.accountSummaries || [])) {
      for (const prop of (account.propertySummaries || [])) {
        if (prop.displayName === 'www.whitehorselabs.com.au' || prop.displayName === 'Whitehorse Labs') {
          propertyId = prop.property.replace('properties/', '');
          break;
        }
      }
      if (propertyId) break;
    }

    // Hard fallback
    if (!propertyId) propertyId = '503884147';

    // Query page views by page path for last 30 days
    const reportRes = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'sessions' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
        ],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 25,
      }),
    });

    const reportData = await reportRes.json();

    if (reportData.error) {
      return Response.json({ error: reportData.error.message }, { status: 500 });
    }

    const rows = (reportData.rows || []).map((row) => ({
      page: row.dimensionValues[0].value,
      views: parseInt(row.metricValues[0].value, 10),
      sessions: parseInt(row.metricValues[1].value, 10),
      bounceRate: parseFloat(row.metricValues[2].value),
      avgDuration: parseFloat(row.metricValues[3].value),
    }));

    return Response.json({ rows, propertyId });
  } catch (error) {
    console.error('getPageViews error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});