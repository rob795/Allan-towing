import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent, EVENTS } from "@/lib/tracking";

export const FloatingChat = () => {
    const [open, setOpen] = useState(false);
    const { lang } = useLanguage();

    const copy = {
        en: {
            title: "Need help right now?",
            body: "Live dispatcher standing by. This chat will connect to GoHighLevel when linked.",
            cta: "Call Dispatcher",
        },
        es: {
            title: "¿Necesita ayuda ahora?",
            body: "Despachador en vivo esperando. Este chat se conectará a GoHighLevel.",
            cta: "Llamar Despachador",
        },
    }[lang];

    return (
        <div
            className="hidden md:block fixed bottom-6 right-6 z-40"
            data-testid="floating-chat"
        >
            {open && (
                <div
                    className="mb-3 w-80 rounded-2xl bg-white border-2 border-brand-primary shadow-brutal p-5"
                    data-testid="floating-chat-panel"
                >
                    <div className="flex items-start justify-between mb-2">
                        <h4 className="font-heading font-bold uppercase text-brand-primary">
                            {copy.title}
                        </h4>
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                            className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-brand-light"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                    <p className="text-sm text-brand-text/70 leading-relaxed mb-4">
                        {copy.body}
                    </p>
                    <a
                        href={`tel:${BUSINESS.phoneTel}`}
                        onClick={() =>
                            trackEvent(EVENTS.PHONE_CLICK, { source: "chat_widget" })
                        }
                        className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-brand-secondary text-brand-primary font-heading font-bold uppercase tracking-wider text-sm"
                        data-testid="floating-chat-call"
                    >
                        <Phone className="h-4 w-4" />
                        {copy.cta}
                    </a>
                    <p className="mt-3 text-[10px] uppercase tracking-widest text-brand-text/40 text-center">
                        GHL Chat Placeholder
                    </p>
                </div>
            )}
            <button
                onClick={() => {
                    setOpen((v) => !v);
                    if (!open) trackEvent(EVENTS.CHAT_OPEN, { source: "widget" });
                }}
                aria-label="Open chat"
                className="h-14 w-14 rounded-full bg-brand-primary text-brand-secondary shadow-brutal-yellow flex items-center justify-center hover:-translate-y-0.5 transition-transform"
                data-testid="floating-chat-toggle"
            >
                {open ? (
                    <X className="h-6 w-6" />
                ) : (
                    <MessageCircle className="h-6 w-6" />
                )}
            </button>
        </div>
    );
};
