/**
 * =============================================================================
 *  SITE CONFIGURATION — Bucket Leads Local Service Template
 * =============================================================================
 *  ALL business-specific values live in this single file.
 *  To fork this landing page for another client, edit ONLY this file
 *  (plus /src/i18n/translations.js for language-specific copy) and drop new
 *  hero images into /public/images/hero/. No component code changes needed.
 * =============================================================================
 */

export const SITE_CONFIG = {
    // -------------------------------------------------------------------------
    //  BUSINESS
    // -------------------------------------------------------------------------
    business: {
        name: "Allan Towing Co.",
        shortName: "Allan Towing",
        legalName: "Allan Towing Co.",
        tagline: "24/7 Emergency Towing in Fontana, CA",
        description:
            "Fast, reliable 24/7 towing and roadside assistance in Fontana, CA. Emergency towing, flatbed towing, jump start, lockout, tire change, and fuel delivery. Bilingual English & Español dispatch.",
        founded: "2015",
        priceRange: "$$",
        currency: "USD",
    },

    // -------------------------------------------------------------------------
    //  CONTACT
    // -------------------------------------------------------------------------
    contact: {
        phoneDisplay: "(909) 278-2226",
        phoneTel: "+19092782226",   // used in tel: links
        phoneSms: "+19092782226",   // used in sms: links
        email: "info@allantowingco.com",
        hoursText: "Open 24 hours, 7 days a week",
        hoursSchema: {
            dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
        },
        languages: ["English", "Spanish"],
    },

    // -------------------------------------------------------------------------
    //  LOCATION / SERVICE AREA
    // -------------------------------------------------------------------------
    location: {
        addressStreet: "Fontana, CA",
        city: "Fontana",
        region: "CA",
        regionFull: "California",
        postalCode: "92335",
        country: "US",
        countryFull: "United States",
        latitude: 34.0922,
        longitude: -117.435,
        mapsPlaceQuery: "Fontana, CA",
        mapsDirectionsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Fontana%2C+CA",
    },

    // Cities served (used in header, footer, service area section, JSON-LD)
    serviceAreas: [
        "Fontana",
        "Rialto",
        "Bloomington",
        "Ontario",
        "Rancho Cucamonga",
        "Colton",
        "San Bernardino",
    ],

    // -------------------------------------------------------------------------
    //  BRAND (locked colors — must also stay in sync with tailwind.config.js)
    // -------------------------------------------------------------------------
    brand: {
        primary: "#111111",
        secondary: "#FFC400",
        accent: "#D32F2F",
        background: "#FFFFFF",
        lightSection: "#F6F6F6",
        text: "#1A1A1A",
        fontHeading: "Oswald",
        fontBody: "Inter",
    },

    // -------------------------------------------------------------------------
    //  HERO IMAGE
    //  Drop optimised assets into /public/images/hero/. See
    //  /public/images/hero/README.md for exact filenames + sizes.
    //  The <HeroImage /> component will automatically pick AVIF > WebP > JPG.
    // -------------------------------------------------------------------------
    heroImage: {
        // Local paths served from /public. Replace files, not paths.
        avif: "/images/hero/hero-1600.avif",
        webp: "/images/hero/hero-1600.webp",
        jpg: "/images/hero/hero-1600.jpg",
        // Fallback CDN URL used until local files exist (see README).
        fallback:
            "https://images.unsplash.com/photo-1601508836900-ee2aa7840a7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxmbGF0YmVkJTIwdG93JTIwdHJ1Y2t8ZW58MHx8fHwxNzgzODA0NzUwfDA&ixlib=rb-4.1.0&q=85&w=1600",
        alt: "Allan Towing Co. flatbed tow truck operating at night in Fontana, CA",
        // Explicit dimensions prevent CLS while the image loads.
        width: 1600,
        height: 900,
        // Preload the mid-size WebP variant for LCP.
        preloadHref: "/images/hero/hero-1200.webp",
    },

    // -------------------------------------------------------------------------
    //  SOCIAL / SAMEAS (for Organization JSON-LD)
    //  Replace # with real URLs once profiles are live.
    // -------------------------------------------------------------------------
    social: {
        google:
            "https://www.google.com/maps/search/?api=1&query=Allan+Towing+Co+Fontana+CA",
        yelp: "#",
        facebook: "#",
        instagram: "#",
        bbb: "#",
    },

    // -------------------------------------------------------------------------
    //  RATING (placeholder — swap when Google Reviews API is wired)
    // -------------------------------------------------------------------------
    rating: {
        value: "5.0",
        count: 127,
    },

    // -------------------------------------------------------------------------
    //  SEO
    // -------------------------------------------------------------------------
    seo: {
        canonicalUrl: "https://allantowingco.com/",
        defaultLocale: "en-US",
        supportedLocales: ["en-US", "es-US"],
        titleEn:
            "24/7 Tow Truck in Fontana, CA | Allan Towing Co. — (909) 278-2226",
        titleEs:
            "Grúa 24/7 en Fontana, CA | Allan Towing Co. — (909) 278-2226",
        descriptionEn:
            "24/7 emergency towing and roadside assistance in Fontana, CA. Fast flatbed towing, jump start, lockout, tire change, and fuel delivery. Bilingual English & Español. Call (909) 278-2226.",
        descriptionEs:
            "Grúa de emergencia y asistencia en carretera 24/7 en Fontana, CA. Grúa de plataforma, pasar corriente, abrir carro, cambio de llanta y entrega de gasolina. Bilingüe English & Español.",
        ogImage:
            "https://images.unsplash.com/photo-1601508836900-ee2aa7840a7b?crop=entropy&cs=srgb&fm=jpg&w=1200&h=630&fit=crop",
        gscVerification: "REPLACE_WITH_GSC_TOKEN",
        bingVerification: "REPLACE_WITH_BING_TOKEN",
    },

    // -------------------------------------------------------------------------
    //  TRACKING (all optional — leave blank to keep placeholders inert)
    // -------------------------------------------------------------------------
    tracking: {
        ga4: "",              // e.g. "G-XXXXXXXXXX"
        gtm: "",              // e.g. "GTM-XXXXXXX"
        googleAds: "",        // e.g. "AW-XXXXXXXXXX"
        metaPixel: "",        // e.g. "16-digit ID"
        clarity: "",          // e.g. "abcd1234"
        callRailScript: "",   // full <script src=...>
        ghlWidgetId: "",      // GoHighLevel chat widget ID
        ghlFormEmbedUrl: "",  // GHL lead form embed URL (optional replacement)
    },
};

// Convenience aliases (kept for the existing constants/business.js import path)
export const BUSINESS = {
    name: SITE_CONFIG.business.name,
    shortName: SITE_CONFIG.business.shortName,
    phone: SITE_CONFIG.contact.phoneDisplay,
    phoneTel: SITE_CONFIG.contact.phoneTel,
    phoneSms: SITE_CONFIG.contact.phoneSms,
    email: SITE_CONFIG.contact.email,
    city: SITE_CONFIG.location.city,
    state: SITE_CONFIG.location.region,
    hours: SITE_CONFIG.contact.hoursText,
    serviceAreas: SITE_CONFIG.serviceAreas,
    address: {
        street: SITE_CONFIG.location.addressStreet,
        city: SITE_CONFIG.location.city,
        region: SITE_CONFIG.location.region,
        postalCode: SITE_CONFIG.location.postalCode,
        country: SITE_CONFIG.location.country,
        latitude: SITE_CONFIG.location.latitude,
        longitude: SITE_CONFIG.location.longitude,
    },
    social: SITE_CONFIG.social,
};

export default SITE_CONFIG;
