import { Phone, MessageSquare, Clock, Zap, MapPin, Languages } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent, EVENTS } from "@/lib/tracking";
import HeroImage from "@/components/HeroImage";

const Badge = ({ icon: Icon, label, testid }) => (
    <div
        className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-white/95"
        data-testid={testid}
    >
        <Icon className="h-3.5 w-3.5 text-brand-secondary" />
        <span className="text-xs font-semibold uppercase tracking-wider">
            {label}
        </span>
    </div>
);

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section
            id="top"
            className="relative isolate overflow-hidden bg-brand-primary text-white"
            data-testid="hero-section"
        >
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <HeroImage className="h-full w-full object-cover object-right" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(5,7,10,0.94) 0%, rgba(5,7,10,0.80) 38%, rgba(5,7,10,0.36) 68%, rgba(5,7,10,0.18) 100%)",
                    }}
                />
                <div className="absolute inset-0 bg-brand-primary/22 sm:bg-brand-primary/16" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-24 lg:py-32">
                <div className="max-w-3xl">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 border border-brand-accent/40 px-3 py-1.5 mb-6 animate-pulse-ring">
                        <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white">
                            {t.hero.eyebrow}
                        </span>
                    </div>

                    <h1 className="font-heading font-bold uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-7xl">
                        <span className="block">{t.hero.title1}</span>
                        <span className="block text-brand-secondary">
                            {t.hero.title2}
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
                        {t.hero.subtitle}
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <a
                            href={`tel:${BUSINESS.phoneTel}`}
                            onClick={() =>
                                trackEvent(EVENTS.PHONE_CLICK, { source: "hero" })
                            }
                            className="group inline-flex items-center justify-center gap-3 h-14 px-7 rounded-full bg-brand-secondary text-brand-primary font-heading font-bold text-lg uppercase tracking-wide shadow-brutal hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                            data-testid="hero-call-button"
                        >
                            <Phone className="h-5 w-5" />
                            {t.hero.callBtn}
                            <span className="hidden sm:inline text-sm opacity-70 font-sans normal-case tracking-normal">
                                {BUSINESS.phone}
                            </span>
                        </a>
                        <a
                            href={`sms:${BUSINESS.phoneSms}`}
                            onClick={() =>
                                trackEvent(EVENTS.SMS_CLICK, { source: "hero" })
                            }
                            className="inline-flex items-center justify-center gap-3 h-14 px-7 rounded-full border-2 border-white/70 text-white font-heading font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-brand-primary transition-colors"
                            data-testid="hero-text-button"
                        >
                            <MessageSquare className="h-5 w-5" />
                            {t.hero.textBtn}
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        <Badge
                            icon={Clock}
                            label={t.hero.badges.b1}
                            testid="badge-24-7"
                        />
                        <Badge
                            icon={Zap}
                            label={t.hero.badges.b2}
                            testid="badge-fast"
                        />
                        <Badge
                            icon={MapPin}
                            label={t.hero.badges.b3}
                            testid="badge-local"
                        />
                        <Badge
                            icon={Languages}
                            label={t.hero.badges.b4}
                            testid="badge-lang"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom stat strip */}
            <div className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { k: "20–30", v: lbl("hero.stat.eta") },
                        { k: "24/7", v: lbl("hero.stat.hours") },
                        { k: "7+", v: lbl("hero.stat.cities") },
                        { k: "5★", v: lbl("hero.stat.rating") },
                    ].map((s, i) => (
                        <StatBlock key={i} value={s.k} label={s.v} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatBlock = ({ value, label }) => (
    <div className="flex items-baseline gap-2">
        <span className="font-heading font-bold text-2xl md:text-3xl text-brand-secondary tabular-nums">
            {value}
        </span>
        <span className="text-xs md:text-sm text-white/70 uppercase tracking-wider font-semibold">
            {label}
        </span>
    </div>
);

// Localised stat labels (inline to keep translations file smaller)
function lbl(key) {
    const langEl =
        typeof document !== "undefined" ? document.documentElement.lang : "en";
    const map = {
        en: {
            "hero.stat.eta": "min ETA",
            "hero.stat.hours": "always open",
            "hero.stat.cities": "cities served",
            "hero.stat.rating": "avg rating",
        },
        es: {
            "hero.stat.eta": "min ETA",
            "hero.stat.hours": "siempre abierto",
            "hero.stat.cities": "ciudades",
            "hero.stat.rating": "calificación",
        },
    };
    return (map[langEl] || map.en)[key];
}
