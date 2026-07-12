import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent, EVENTS } from "@/lib/tracking";

export const MobileCallBar = () => {
    const { t } = useLanguage();
    return (
        <div
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-5 gap-0 bg-brand-primary text-white shadow-[0_-8px_20px_rgba(0,0,0,0.35)]"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            data-testid="mobile-call-bar"
        >
            <a
                href={`tel:${BUSINESS.phoneTel}`}
                onClick={() =>
                    trackEvent(EVENTS.PHONE_CLICK, { source: "mobile_bar" })
                }
                className="col-span-3 flex items-center justify-center gap-2 bg-brand-secondary text-brand-primary font-heading font-bold uppercase tracking-wider text-base py-4"
                data-testid="mobile-bar-call"
            >
                <Phone className="h-5 w-5" />
                {t.mobileBar}
            </a>
            <a
                href={`sms:${BUSINESS.phoneSms}`}
                onClick={() =>
                    trackEvent(EVENTS.SMS_CLICK, { source: "mobile_bar" })
                }
                className="col-span-2 flex items-center justify-center gap-1.5 bg-brand-accent text-white font-heading font-bold uppercase tracking-wider text-sm py-4"
                data-testid="mobile-bar-text"
            >
                <MessageSquare className="h-4 w-4" />
                {t.nav.text}
            </a>
        </div>
    );
};
