'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/config/content';

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="bg-[var(--color-bg)] py-20 lg:py-28" ref={ref}>
            <div className="mx-auto max-w-[1200px] px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
                        {content.testimonials.headline}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {content.testimonials.items.map((t, i) => (
                        <motion.div
                            key={i}
                            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 flex flex-col justify-between transition-all hover:border-[var(--color-gold)]/30"
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div>
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <svg key={j} className="h-4 w-4 text-[var(--color-gold)]" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed italic mb-6">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[var(--color-text)]">{t.author}</p>
                                <p className="text-xs text-[var(--color-text-subtle)]">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
