// Lightweight dataLayer event helper. Real trackers (GA4/GTM/Meta Pixel/CallRail/Clarity)
// are wired via placeholders in public/index.html. This util just pushes events.
const EVENT_ALIASES = {
    phone_click: ["call_click"],
    call_click: ["phone_click"],
    emergency_form_submit: ["form_submit"],
    form_submit: ["emergency_form_submit"],
    service_card_click: ["service_click"],
    service_click: ["service_card_click"],
    language_toggle: ["language_change"],
    language_change: ["language_toggle"],
};

export const trackEvent = (event, params = {}) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    const ts = Date.now();
    window.dataLayer.push({ event, ...params, ts });

    const aliases = EVENT_ALIASES[event] || [];
    aliases.forEach((aliasEvent) => {
        window.dataLayer.push({
            event: aliasEvent,
            aliasOf: event,
            ...params,
            ts,
        });
    });

};

export const EVENTS = {
    PHONE_CLICK: "phone_click",
    CALL_CLICK: "call_click",
    SMS_CLICK: "sms_click",
    FORM_SUBMIT: "emergency_form_submit",
    FORM_SUBMIT_GENERIC: "form_submit",
    REVIEW_CLICK: "review_click",
    DIRECTIONS_CLICK: "directions_click",
    MAP_CLICK: "map_click",
    CHAT_OPEN: "chat_open",
    SERVICE_CARD_CLICK: "service_card_click",
    SERVICE_CLICK: "service_click",
    LANG_TOGGLE: "language_toggle",
    LANGUAGE_CHANGE: "language_change",
};
