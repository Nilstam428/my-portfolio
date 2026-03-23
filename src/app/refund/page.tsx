import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund Policy — Manestro',
    description: 'Refund Policy for the Manestro restaurant management platform.',
};

export default function RefundPage() {
    return (
        <div className="min-h-screen bg-[var(--color-bg)] pt-[calc(var(--nav-height)+2rem)] pb-20">
            <div className="mx-auto max-w-[800px] px-6">
                <header className="mb-12">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-3">Legal</p>
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">Refund Policy</h1>
                    <p className="mt-3 text-sm text-[var(--color-text-subtle)]">Last updated: March 2026</p>
                </header>

                <div className="prose-custom flex flex-col gap-8">
                    <Section title="1. Free Trial">
                        Manestro offers a free trial with no time limit and no credit card required. Since no payment is collected during the trial, no refund is applicable for trial usage.
                    </Section>

                    <Section title="2. Subscription Refunds">
                        If you are unsatisfied with the Service within the first 14 days of a paid subscription, you may request a full refund. Refund requests must be submitted to billing@manestro.in within this 14-day window.
                    </Section>

                    <Section title="3. Pro-Rated Refunds">
                        For cancellations after the 14-day window, no pro-rated refunds are offered. Your subscription will remain active until the end of the current billing period. You will not be charged for subsequent periods after cancellation.
                    </Section>

                    <Section title="4. Setup and Onboarding">
                        Since setup and onboarding are provided free of charge, no refund applies to these services.
                    </Section>

                    <Section title="5. Payment Gateway">
                        Payment gateway setup and management are included at no additional charge. No separate refund applies to these services.
                    </Section>

                    <Section title="6. Refund Process">
                        Approved refunds will be processed within 7–10 business days and credited to the original payment method. You will receive a confirmation email once the refund has been processed.
                    </Section>

                    <Section title="7. Disputes">
                        If you have a billing dispute or believe a charge was made in error, contact us at billing@manestro.in. We will review and resolve the dispute within 5 business days.
                    </Section>

                    <Section title="8. Contact">
                        For refund-related inquiries, contact us at billing@manestro.in or through the contact options available on the platform.
                    </Section>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">{title}</h2>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{children}</p>
        </div>
    );
}
