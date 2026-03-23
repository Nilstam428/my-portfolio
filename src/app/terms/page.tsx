import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service — Manestro',
    description: 'Terms of Service for the Manestro restaurant management platform.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[var(--color-bg)] pt-[calc(var(--nav-height)+2rem)] pb-20">
            <div className="mx-auto max-w-[800px] px-6">
                <header className="mb-12">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-3">Legal</p>
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">Terms of Service</h1>
                    <p className="mt-3 text-sm text-[var(--color-text-subtle)]">Last updated: March 2026</p>
                </header>

                <div className="prose-custom flex flex-col gap-8">
                    <Section title="1. Acceptance of Terms">
                        By accessing or using the Manestro platform (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service.
                    </Section>

                    <Section title="2. Description of Service">
                        Manestro provides a unified restaurant management platform including but not limited to POS, restaurant management, QR menu systems, analytics, digital billing, inventory management, staff management, website hosting, and payment gateway integration. The Service is provided on a subscription basis as described on our pricing page.
                    </Section>

                    <Section title="3. Account Registration">
                        To use the Service, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
                    </Section>

                    <Section title="4. Free Trial">
                        Manestro offers a free trial with no time limit and no credit card requirement. The free trial provides access to the full platform. Manestro reserves the right to modify the terms of the free trial at any time with reasonable notice.
                    </Section>

                    <Section title="5. Subscription and Payment">
                        Paid subscriptions are billed monthly at the rates specified on our pricing page. Prices are subject to change with 30 days&apos; notice. Payment is processed through our secure payment gateway. All fees are exclusive of applicable taxes unless stated otherwise.
                    </Section>

                    <Section title="6. Data Ownership">
                        You retain full ownership of all data you input into the Service. Manestro does not claim any intellectual property rights over your content. Upon termination of your account, you may request a full export of your data. We will provide the export and clear your data from our systems upon request.
                    </Section>

                    <Section title="7. Acceptable Use">
                        You agree not to use the Service for any unlawful purpose, to transmit harmful code, to attempt unauthorized access to our systems, or to interfere with the Service&apos;s operation. Manestro reserves the right to suspend or terminate accounts that violate these terms.
                    </Section>

                    <Section title="8. Service Availability">
                        Manestro strives to maintain high availability of the Service but does not guarantee uninterrupted access. We may perform scheduled maintenance with advance notice. We are not liable for any downtime or service interruptions beyond our reasonable control.
                    </Section>

                    <Section title="9. Limitation of Liability">
                        To the maximum extent permitted by law, Manestro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. Our total liability shall not exceed the amount paid by you for the Service in the twelve months preceding the claim.
                    </Section>

                    <Section title="10. Modifications to Terms">
                        Manestro reserves the right to modify these Terms at any time. We will notify users of material changes via email or through the platform. Continued use of the Service after changes constitutes acceptance of the modified Terms.
                    </Section>

                    <Section title="11. Governing Law">
                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in India.
                    </Section>

                    <Section title="12. Contact">
                        For questions about these Terms, contact us at legal@manestro.in or through the contact options available on the platform.
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
