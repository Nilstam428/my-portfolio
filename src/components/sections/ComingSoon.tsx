'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/config/content';

const icons = ['🤖', '📡', '📱'];

export default function ComingSoon() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="bg-[var(--color-bg-alt)] border-y border-[var(--color-border)] py-20 lg:py-28" ref={ref}>
            <div className="mx-auto max-w-[1200px] px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
                        {content.comingSoon.headline}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {content.comingSoon.items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 text-center transition-all hover:border-[var(--color-gold)]/30 hover:shadow-lg"
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <span className="text-3xl mb-3 block">{icons[i]}</span>
                            <span className="inline-block mb-3 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                                Coming Soon
                            </span>
                            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{item.title}</h3>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
