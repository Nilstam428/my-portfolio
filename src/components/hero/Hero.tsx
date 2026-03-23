'use client';

import { motion } from 'framer-motion';
import { content } from '@/config/content';
import dynamic from 'next/dynamic';

const DashboardPreview = dynamic(
    () => import('@/components/hero/DashboardPreview'),
    { ssr: false }
);

export default function Hero() {
    const { hero } = content;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]" style={{ paddingTop: 'var(--nav-height)' }}>
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[var(--color-gold)]/5 blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[var(--color-gold)]/3 blur-[120px]" />
            </div>

            <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
                {/* LEFT — Text */}
                <motion.div
                    className="flex-1 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="mb-4 inline-block rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                        {hero.eyebrow}
                    </span>

                    <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                        {hero.headline}
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg mx-auto lg:mx-0">
                        {hero.subheadline}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                        <a
                            href={hero.primaryCta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-xl hover:shadow-[var(--color-gold)]/20"
                        >
                            {hero.primaryCta.label}
                            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </a>
                        <a
                            href={hero.secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text)] transition-all hover:bg-[var(--color-bg-elevated)]"
                        >
                            {hero.secondaryCta.label}
                        </a>
                    </div>

                    <p className="mt-6 text-xs text-[var(--color-text-subtle)]">
                        {hero.trustLine}
                    </p>
                </motion.div>

                {/* RIGHT — Dashboard Preview (Desktop) */}
                <motion.div
                    className="hidden flex-1 items-center justify-center lg:flex"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <DashboardPreview />
                </motion.div>

                {/* Mobile — Static stat cards */}
                <motion.div
                    className="flex w-full gap-3 overflow-x-auto pb-2 lg:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {[
                        { label: 'Orders Today', value: '142', icon: '📦' },
                        { label: 'Revenue', value: '₹38,450', icon: '💰' },
                        { label: 'Active Tables', value: '8/14', icon: '🪑' },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="flex-1 min-w-[120px] rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4"
                        >
                            <span className="text-lg">{stat.icon}</span>
                            <p className="mt-1 text-[11px] text-[var(--color-text-subtle)]">{stat.label}</p>
                            <p className="text-lg font-bold text-[var(--color-text)]">{stat.value}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
