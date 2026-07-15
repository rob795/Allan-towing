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
        tagline: "24/7 Emergency Towing — Based in Fontana, California",
        description:
            "Fast, reliable 24/7 towing and roadside assistance based in Fontana, California. Emergency towing, flatbed towing, jump start, lockout, and fuel delivery. Bilingual English & Español dispatch.",
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
        addressStreet: "Headquartered in Fontana, California.",
        city: "Fontana",
        region: "California",
        regionFull: "California",
        postalCode: "",
        country: "US",
        countryFull: "United States",
        latitude: 34.0922,
        longitude: -117.435,
        mapsPlaceQuery: "Fontana, California",
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
    //  ASSETS (centralized paths for logos, icons, hero media, OG media)
    // -------------------------------------------------------------------------
    assets: {
        logoFullWebp: "/brand/allan-logo-full.webp",
        logoFullPng: "/brand/allan-logo-full.png",
        logoHeaderWebp: "/brand/allan-logo-header.webp",
        logoHeaderPng: "/brand/allan-logo-header.png",
        logoNavbarWebp: "/brand/logo-navbar.webp",
        logoNavbarWebp2x: "/brand/logo-navbar@2x.webp",
        logoNavbarPng: "/brand/logo-navbar.png",
        logoNavbarPng2x: "/brand/logo-navbar@2x.png",
        icon: "/android-chrome-192x192.png",
        ogImage: "/og/allan-towing-og.jpg",
        hero: {
            avif800: "/images/hero/allan-fleet-800.avif",
            avif1200: "/images/hero/allan-fleet-1200.avif",
            avif1600: "/images/hero/allan-fleet-1600.avif",
            webp800: "/images/hero/allan-fleet-800.webp",
            webp1200: "/images/hero/allan-fleet-1200.webp",
            webp1600: "/images/hero/allan-fleet-1600.webp",
            fallbackJpg: "/images/hero/allan-fleet-fallback.jpg",
            width: 1600,
            height: 900,
            alt: "Three flatbed tow trucks prepared for roadside service.",
            preloadHref: "/images/hero/allan-fleet-1200.webp",
        },
    },

    // -------------------------------------------------------------------------
    //  HERO IMAGE
    //  Drop optimised assets into /public/images/hero/. See
    //  /public/images/hero/README.md for exact filenames + sizes.
    //  The <HeroImage /> component will automatically pick AVIF > WebP > JPG.
    // -------------------------------------------------------------------------
    heroImage: {
        avif: "/images/hero/allan-fleet-1600.avif",
        webp: "/images/hero/allan-fleet-1600.webp",
        jpg: "/images/hero/allan-fleet-fallback.jpg",
        fallback: "/images/hero/allan-fleet-fallback.jpg",
        alt: "Three flatbed tow trucks prepared for roadside service.",
        width: 1600,
        height: 900,
        preloadHref: "/images/hero/allan-fleet-1200.webp",
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
            "24/7 Tow Truck in Fontana, California | Allan Towing Co. — (909) 278-2226",
        titleEs:
            "Grúa 24/7 en Fontana, California | Allan Towing Co. — (909) 278-2226",
        descriptionEn:
            "24/7 emergency towing and roadside assistance based in Fontana, California. Fast flatbed towing, jump start, lockout, and fuel delivery. Bilingual English & Español. Call (909) 278-2226.",
        descriptionEs:
            "Grúa de emergencia y asistencia en carretera 24/7 con base en Fontana, California. Grúa de plataforma, pasar corriente, abrir carro y entrega de gasolina. Bilingüe English & Español.",
        ogImage: "/og/allan-towing-og.jpg",
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
