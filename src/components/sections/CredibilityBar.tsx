import { content } from '@/config/content';

export default function CredibilityBar() {
    return (
        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-alt)]">
            <div className="mx-auto max-w-[1200px] px-6 py-5 text-center">
                <p className="text-sm font-medium text-[var(--color-text-muted)] tracking-wide">
                    {content.credibility.text}
                </p>
            </div>
        </section>
    );
}
