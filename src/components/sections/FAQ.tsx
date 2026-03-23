'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { content } from '@/config/content';

export default function FAQ() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="faq" className="bg-[var(--color-bg-alt)] border-y border-[var(--color-border)] py-20 lg:py-28" ref={ref}>
            <div className="mx-auto max-w-[800px] px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
                        {content.faq.headline}
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-3">
                    {content.faq.items.map((item, i) => (
                        <FAQItem key={i} item={item} index={i} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({
    item,
    index,
    isInView,
}: {
    item: { question: string; answer: string };
    index: number;
    isInView: boolean;
}) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden transition-all hover:border-[var(--color-gold)]/20"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
                <h3 className="text-sm font-semibold text-[var(--color-text)] pr-2">{item.question}</h3>
                <motion.span
                    className="flex-shrink-0 text-[var(--color-text-muted)]"
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </motion.span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="px-5 pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
