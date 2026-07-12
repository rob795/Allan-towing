import { Timer, ShieldCheck, MessagesSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const WhyChooseUs = () => {
    const { t } = useLanguage();

    const items = [
        { key: "fast", Icon: Timer },
        { key: "pro", Icon: ShieldCheck },
        { key: "clear", Icon: MessagesSquare },
    ];

    return (
        <section
            id="why"
            className="bg-brand-light py-16 md:py-24"
            data-testid="why-section"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-10 md:mb-14">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
                        {t.why.eyebrow}
                    </span>
                    <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-brand-primary leading-[1.05]">
                        {t.why.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map(({ key, Icon }, i) => {
                        const item = t.why.items[key];
                        return (
                            <div
                                key={key}
                                className="relative bg-white rounded-2xl p-7 md:p-8 border-2 border-brand-primary shadow-brutal"
                                data-testid={`why-card-${key}`}
                            >
                                <span className="absolute top-4 right-4 font-heading font-bold text-brand-primary/10 text-4xl leading-none">
                                    0{i + 1}
                                </span>
                                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-secondary text-brand-primary mb-5">
                                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                                </span>
                                <h3 className="font-heading font-bold uppercase text-xl md:text-2xl text-brand-primary">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-brand-text/70 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
