import { useEffect } from "react";
import { base44 } from "@/api/base44Client";

/**
 * Fires one custom analytics event per page view, so the page appears as its
 * own card in the platform Analytics dashboard.
 */
export default function usePageViewTracking(eventName, pagePath) {
  useEffect(() => {
    base44.analytics.track({ eventName, properties: { page: pagePath } });
  }, [eventName, pagePath]);
}