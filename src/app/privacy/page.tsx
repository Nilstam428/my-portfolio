import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy — Manestro',
    description: 'Privacy Policy for the Manestro restaurant management platform.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[var(--color-bg)] pt-[calc(var(--nav-height)+2rem)] pb-20">
            <div className="mx-auto max-w-[800px] px-6">
                <header className="mb-12">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-3">Legal</p>
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">Privacy Policy</h1>
                    <p className="mt-3 text-sm text-[var(--color-text-subtle)]">Last updated: March 2026</p>
                </header>

                <div className="prose-custom flex flex-col gap-8">
                    <Section title="1. Information We Collect">
                        We collect information you provide directly, including your name, email address, business name, phone number, and payment information. We also collect usage data including how you interact with the platform, device information, IP addresses, and browser type.
                    </Section>

                    <Section title="2. How We Use Your Information">
                        We use your information to provide and improve the Service, process payments, communicate with you about your account, send service-related notifications, provide customer support, enforce our terms and policies, and comply with legal obligations.
                    </Section>

                    <Section title="3. Data Storage and Security">
                        Your data is stored on secure servers with industry-standard encryption. We implement two-factor authentication, end-to-end encryption, and regular security audits. We retain your data only as long as necessary to provide the Service or as required by law.
                    </Section>

                    <Section title="4. Data Sharing">
                        We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share data with trusted service providers who assist in operating the platform (e.g., payment processors), and when required by law or to protect our legal rights.
                    </Section>

                    <Section title="5. Payment Information">
                        Payment processing is handled through our secure, PCI-compliant payment gateway. We do not store complete credit card numbers on our servers. Payment information is encrypted during transmission and processing.
                    </Section>

                    <Section title="6. Cookies and Tracking">
                        We use essential cookies to maintain your session and remember your preferences (such as theme settings). We may use analytics tools to understand how the platform is used. You can manage cookie preferences through your browser settings.
                    </Section>

                    <Section title="7. Your Rights">
                        You have the right to access your personal data, request correction of inaccurate data, request deletion of your data, export your data in a portable format, and withdraw consent for data processing where applicable.
                    </Section>

                    <Section title="8. Data Retention">
                        We retain your data for as long as your account is active or as needed to provide the Service. Upon account termination, you may request a full data export. We will delete your data from our systems upon request, subject to legal retention requirements.
                    </Section>

                    <Section title="9. Children&apos;s Privacy">
                        The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information.
                    </Section>

                    <Section title="10. Changes to This Policy">
                        We may update this Privacy Policy from time to time. We will notify you of material changes via email or through the platform. The date of the last update is indicated at the top of this page.
                    </Section>

                    <Section title="11. Contact">
                        For privacy-related inquiries, contact us at privacy@manestro.in or through the contact options available on the platform.
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
