import { MapPin, Navigation, Phone } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent, EVENTS } from "@/lib/tracking";

// Google Maps embed — no API key needed. Centered on Fontana, CA.
const MAP_EMBED =
    "https://www.google.com/maps?q=Fontana,+CA&z=10&output=embed";

export const ServiceArea = () => {
    const { t } = useLanguage();

    return (
        <section
            id="area"
            className="bg-brand-primary text-white py-16 md:py-24"
            data-testid="service-area-section"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-2">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-secondary mb-3">
                            {t.area.eyebrow}
                        </span>
                        <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
                            {t.area.title}
                        </h2>
                        <p className="mt-4 text-white/70 leading-relaxed">
                            {t.area.subtitle}
                        </p>

                        <ul
                            className="mt-6 grid grid-cols-2 gap-2"
                            data-testid="service-area-list"
                        >
                            {BUSINESS.serviceAreas.map((city) => (
                                <li key={city}>
                                    <a
                                        href={`tel:${BUSINESS.phoneTel}`}
                                        onClick={() => {
                                            trackEvent(EVENTS.PHONE_CLICK, {
                                                source: `city_${city}`,
                                            });
                                        }}
                                        className="group flex items-center justify-between gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary transition-colors px-3 py-2.5"
                                        data-testid={`city-${city.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-brand-secondary group-hover:text-brand-primary" />
                                            <span className="font-semibold text-sm">
                                                {city}
                                            </span>
                                        </span>
                                        <Phone className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                                "Fontana, CA",
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                                trackEvent(EVENTS.DIRECTIONS_CLICK, { source: "area" })
                            }
                            className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-brand-secondary text-brand-primary font-bold text-sm uppercase tracking-wider"
                            data-testid="directions-button"
                        >
                            <Navigation className="h-4 w-4" />
                            {t.area.directions}
                        </a>
                    </div>

                    <div className="lg:col-span-3">
                        <div
                            className="relative rounded-2xl overflow-hidden border-2 border-brand-secondary shadow-brutal-yellow bg-brand-light aspect-[4/3] md:aspect-[16/10]"
                            data-testid="service-area-map"
                            onClick={() =>
                                trackEvent(EVENTS.MAP_CLICK, { source: "area" })
                            }
                        >
                            <iframe
                                title="Allan Towing Co. service area map"
                                src={MAP_EMBED}
                                className="absolute inset-0 h-full w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
