import {
    Truck,
    Layers,
    BatteryCharging,
    KeyRound,
    Fuel,
    ArrowRight,
} from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent, EVENTS } from "@/lib/tracking";

export const Services = () => {
    const { t } = useLanguage();

    const items = [
        { key: "emergency", Icon: Truck, urgent: true },
        { key: "flatbed", Icon: Layers },
        { key: "jump", Icon: BatteryCharging },
        { key: "lockout", Icon: KeyRound },
        { key: "fuel", Icon: Fuel },
    ];

    return (
        <section
            id="services"
            className="bg-white py-16 md:py-24"
            data-testid="services-section"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-10 md:mb-14">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
                        {t.services.eyebrow}
                    </span>
                    <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-brand-primary leading-[1.05]">
                        {t.services.title}
                    </h2>
                    <p className="mt-4 text-brand-text/70 text-base sm:text-lg leading-relaxed">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {items.map(({ key, Icon, urgent }, idx) => {
                        const item = t.services.items[key];
                        return (
                            <a
                                key={key}
                                href={`tel:${BUSINESS.phoneTel}`}
                                onClick={() => {
                                    trackEvent(EVENTS.SERVICE_CARD_CLICK, { service: key });
                                    trackEvent(EVENTS.PHONE_CLICK, { source: `service_${key}` });
                                }}
                                className="group relative flex flex-col rounded-2xl border-2 border-brand-primary bg-white p-6 md:p-7 shadow-brutal hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111111] transition-all duration-200"
                                data-testid={`service-card-${key}`}
                                style={{ animationDelay: `${idx * 60}ms` }}
                            >
                                {urgent && (
                                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-brand-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                                        24/7
                                    </span>
                                )}
                                <div className="flex items-start justify-between mb-5">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-brand-secondary">
                                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                                    </span>
                                    <span className="font-heading font-bold text-brand-primary/20 text-3xl leading-none">
                                        0{idx + 1}
                                    </span>
                                </div>
                                <h3 className="font-heading font-bold uppercase tracking-tight text-xl md:text-2xl text-brand-primary">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm md:text-base text-brand-text/70 leading-relaxed flex-1">
                                    {item.desc}
                                </p>
                                <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-sm uppercase tracking-wider text-brand-primary group-hover:text-brand-accent transition-colors">
                                    {t.services.cta}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
