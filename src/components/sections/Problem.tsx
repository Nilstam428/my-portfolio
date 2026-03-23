'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/config/content';

const icons = ['🔧', '💸', '📋', '📊'];

export default function Problem() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="bg-[var(--color-bg)] py-20 lg:py-28" ref={ref}>
            <div className="mx-auto max-w-[1200px] px-6">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
                        {content.problem.headline}
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        {content.problem.subheadline}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {content.problem.items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 transition-all hover:border-[var(--color-gold)]/30 hover:shadow-lg"
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)] text-xl">
                                {icons[i]}
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{item.title}</h3>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">{item.pain}</p>
                            <p className="text-sm font-medium text-[var(--color-gold)]">→ {item.solution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
