import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

export const FAQ = () => {
    const { t } = useLanguage();

    return (
        <section
            id="faq"
            className="bg-white py-16 md:py-24"
            data-testid="faq-section"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-12">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
                        {t.faq.eyebrow}
                    </span>
                    <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-brand-primary leading-[1.05]">
                        {t.faq.title}
                    </h2>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="space-y-3"
                    data-testid="faq-accordion"
                >
                    {t.faq.items.map((item, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="rounded-xl border-2 border-brand-primary/15 bg-brand-light px-5 data-[state=open]:border-brand-primary data-[state=open]:bg-white data-[state=open]:shadow-brutal-sm transition-all"
                            data-testid={`faq-item-${i}`}
                        >
                            <AccordionTrigger className="text-left font-heading uppercase tracking-tight text-base sm:text-lg text-brand-primary hover:no-underline py-5">
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-brand-text/75 leading-relaxed pb-5 text-[15px]">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};
