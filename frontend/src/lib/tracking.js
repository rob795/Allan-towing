// Lightweight dataLayer event helper. Real trackers (GA4/GTM/Meta Pixel/CallRail/Clarity)
// are wired via placeholders in public/index.html. This util just pushes events.
export const trackEvent = (event, params = {}) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params, ts: Date.now() });
    // Convenience for local dev
    if (process.env.NODE_ENV !== "production") {
        console.debug("[track]", event, params);
    }
};

export const EVENTS = {
    PHONE_CLICK: "phone_click",
    SMS_CLICK: "sms_click",
    FORM_SUBMIT: "emergency_form_submit",
    REVIEW_CLICK: "review_click",
    DIRECTIONS_CLICK: "directions_click",
    MAP_CLICK: "map_click",
    CHAT_OPEN: "chat_open",
    SERVICE_CARD_CLICK: "service_card_click",
    LANG_TOGGLE: "language_toggle",
};
