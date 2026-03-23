'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/config/content';

export default function SolutionOverview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="bg-[var(--color-bg-alt)] border-y border-[var(--color-border)] py-20 lg:py-28" ref={ref}>
            <div className="mx-auto max-w-[800px] px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
                        {content.solution.headline}
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
                        {content.solution.body}
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <a
                            href={content.solution.cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg hover:shadow-[var(--color-gold)]/20"
                        >
                            {content.solution.cta.label}
                            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-6 text-xs text-[var(--color-text-subtle)]">
                        {content.solution.trustLine}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
