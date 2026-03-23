'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/config/content';

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="pricing" className="bg-[var(--color-bg)] py-20 lg:py-28" ref={ref}>
            <div className="mx-auto max-w-[1200px] px-6">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
                        {content.pricing.headline}
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-muted)]">
                        {content.pricing.subheadline}
                    </p>
                    <p className="mt-3 text-sm text-[var(--color-text-subtle)]">
                        {content.pricing.trustLine}
                    </p>
                </motion.div>

                {/* Plan cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    {content.pricing.plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            className={`relative rounded-xl border p-6 transition-all hover:shadow-xl ${plan.highlighted
                                    ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/5 shadow-lg shadow-[var(--color-gold)]/10'
                                    : 'border-[var(--color-border)] bg-[var(--color-bg-card)]'
                                }`}
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-gold)] px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-lg font-bold text-[var(--color-text)]">{plan.name}</h3>
                            <div className="mt-3 mb-1">
                                <span className="text-3xl font-extrabold text-[var(--color-text)]">{plan.price}</span>
                                <span className="text-sm text-[var(--color-text-muted)]">{plan.period}</span>
                            </div>
                            <p className="text-xs text-[var(--color-text-muted)] mb-5 leading-relaxed">{plan.description}</p>
                            <ul className="flex flex-col gap-2 mb-6">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                                        <span className="text-[var(--color-gold)] text-xs">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={plan.cta.href}
                                className={`block w-full rounded-full py-2.5 text-center text-sm font-semibold transition-all ${plan.highlighted
                                        ? 'bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-dark)]'
                                        : 'border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg-elevated)]'
                                    }`}
                            >
                                {plan.cta.label}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Custom plan row */}
                <motion.div
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div>
                        <h3 className="text-lg font-bold text-[var(--color-text)]">{content.pricing.custom.name}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{content.pricing.custom.description}</p>
                    </div>
                    <a
                        href={content.pricing.custom.cta.href}
                        className="flex-shrink-0 rounded-full border border-[var(--color-gold)] px-6 py-2.5 text-sm font-semibold text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-white"
                    >
                        {content.pricing.custom.cta.label}
                    </a>
                </motion.div>

                <p className="mt-6 text-center text-xs text-[var(--color-text-subtle)]">
                    {content.pricing.footerNote}
                </p>
            </div>
        </section>
    );
}
