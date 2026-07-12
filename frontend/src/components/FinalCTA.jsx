import { Phone } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent, EVENTS } from "@/lib/tracking";

export const FinalCTA = () => {
    const { t } = useLanguage();
    return (
        <section
            className="relative bg-brand-primary text-white py-16 md:py-24 overflow-hidden"
            data-testid="final-cta-section"
        >
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #FFC400 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                }}
            />
            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-heading font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
                    {t.finalCta.title}
                </h2>
                <p className="mt-5 text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
                    {t.finalCta.subtitle}
                </p>
                <a
                    href={`tel:${BUSINESS.phoneTel}`}
                    onClick={() =>
                        trackEvent(EVENTS.PHONE_CLICK, { source: "final_cta" })
                    }
                    className="mt-9 inline-flex items-center justify-center gap-3 h-16 md:h-[72px] px-8 md:px-10 rounded-full bg-brand-secondary text-brand-primary font-heading font-bold text-xl md:text-2xl uppercase tracking-wide shadow-brutal-yellow hover:-translate-y-1 transition-transform"
                    data-testid="final-cta-call"
                >
                    <Phone className="h-6 w-6" />
                    {t.finalCta.button}
                </a>
                <p className="mt-4 text-xs text-white/60 uppercase tracking-widest font-semibold">
                    Live dispatcher • 24/7 • {BUSINESS.city}, {BUSINESS.state}
                </p>
            </div>
        </section>
    );
};
