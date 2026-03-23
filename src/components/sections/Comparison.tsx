'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/config/content';

export default function Comparison() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="bg-[var(--color-bg-alt)] border-y border-[var(--color-border)] py-20 lg:py-28" ref={ref}>
            <div className="mx-auto max-w-[1000px] px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
                        {content.comparison.headline}
                    </h2>
                </motion.div>

                <motion.div
                    className="overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b-2 border-[var(--color-border)]">
                                <th className="text-left py-3 pr-4 text-[var(--color-text-muted)] font-semibold">Feature</th>
                                <th className="text-left py-3 px-4 text-[var(--color-text-muted)] font-semibold">Market Standard</th>
                                <th className="text-left py-3 pl-4 font-semibold">
                                    <span className="text-[var(--color-gold)]">Manestro</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.comparison.rows.map((row, i) => (
                                <tr key={i} className="border-b border-[var(--color-border)]/50 transition-colors hover:bg-[var(--color-bg-elevated)]/50">
                                    <td className="py-3 pr-4 font-medium text-[var(--color-text)]">{row.feature}</td>
                                    <td className="py-3 px-4 text-[var(--color-text-muted)]">{row.market}</td>
                                    <td className="py-3 pl-4 font-medium text-[var(--color-gold)]">{row.manestro}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
}
