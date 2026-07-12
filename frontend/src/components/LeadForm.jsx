import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent, EVENTS } from "@/lib/tracking";
import { BUSINESS } from "@/constants/business";

export const LeadForm = () => {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        trackEvent(EVENTS.FORM_SUBMIT, { form: "emergency", ...data });
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 6000);
        e.currentTarget.reset();
    };

    const inputCls =
        "h-12 rounded-lg border-2 border-brand-primary/15 bg-white text-brand-text placeholder:text-brand-text/40 focus-visible:ring-brand-secondary focus-visible:border-brand-primary";

    return (
        <section
            id="request"
            className="bg-white py-16 md:py-24"
            data-testid="lead-form-section"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-2">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
                            {t.form.eyebrow}
                        </span>
                        <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-brand-primary leading-[1.05]">
                            {t.form.title}
                        </h2>
                        <p className="mt-4 text-brand-text/70 leading-relaxed">
                            {t.form.subtitle}
                        </p>
                        <div className="mt-6 flex items-start gap-3 rounded-lg border border-brand-accent/30 bg-brand-accent/5 p-4">
                            <AlertCircle className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                            <p className="text-sm text-brand-text/80">
                                {t.form.placeholderNote}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl bg-brand-light border-2 border-brand-primary shadow-brutal p-6 md:p-8 space-y-5"
                            data-testid="lead-form"
                            data-ghl-placeholder="true"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="name"
                                        className="text-xs font-bold uppercase tracking-wider text-brand-primary"
                                    >
                                        {t.form.name}
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        placeholder="John Doe"
                                        className={inputCls}
                                        data-testid="form-name"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="phone"
                                        className="text-xs font-bold uppercase tracking-wider text-brand-primary"
                                    >
                                        {t.form.phone}
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        inputMode="tel"
                                        autoComplete="tel"
                                        placeholder={BUSINESS.phone}
                                        className={inputCls}
                                        data-testid="form-phone"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="location"
                                    className="text-xs font-bold uppercase tracking-wider text-brand-primary"
                                >
                                    {t.form.location}
                                </Label>
                                <Input
                                    id="location"
                                    name="location"
                                    required
                                    placeholder="I-10 near Cherry Ave"
                                    className={inputCls}
                                    data-testid="form-location"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="vehicle"
                                    className="text-xs font-bold uppercase tracking-wider text-brand-primary"
                                >
                                    {t.form.vehicle}
                                </Label>
                                <Input
                                    id="vehicle"
                                    name="vehicle"
                                    placeholder="2019 Honda Civic"
                                    className={inputCls}
                                    data-testid="form-vehicle"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="problem"
                                    className="text-xs font-bold uppercase tracking-wider text-brand-primary"
                                >
                                    {t.form.problem}
                                </Label>
                                <Textarea
                                    id="problem"
                                    name="problem"
                                    rows={4}
                                    required
                                    placeholder={t.form.problemPh}
                                    className="rounded-lg border-2 border-brand-primary/15 bg-white text-brand-text placeholder:text-brand-text/40 focus-visible:ring-brand-secondary focus-visible:border-brand-primary"
                                    data-testid="form-problem"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-full bg-brand-primary text-brand-secondary font-heading font-bold text-lg uppercase tracking-wider hover:bg-brand-accent hover:text-white transition-colors"
                                data-testid="form-submit"
                            >
                                <Send className="h-5 w-5" />
                                {t.form.submit}
                            </button>

                            {submitted && (
                                <div
                                    className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800"
                                    role="status"
                                    data-testid="form-success"
                                >
                                    <CheckCircle2 className="h-5 w-5" />
                                    {t.form.submitted}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
