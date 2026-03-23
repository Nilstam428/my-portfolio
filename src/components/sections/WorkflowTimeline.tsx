'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/config/content';

export default function WorkflowTimeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section className="bg-[var(--color-bg)] py-20 lg:py-28" ref={ref}>
            <div className="mx-auto max-w-[900px] px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
                        {content.workflow.headline}
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-muted)]">
                        {content.workflow.subheadline}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[52px] top-0 bottom-0 w-px bg-[var(--color-border)] sm:left-[72px]" />

                    <div className="flex flex-col gap-6">
                        {content.workflow.steps.map((step, i) => (
                            <TimelineStep key={i} step={step} index={i} />
                        ))}
                    </div>
                </div>

                {/* Closing */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
                        {content.workflow.closingLine}
                    </p>
                    <a
                        href={content.workflow.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg hover:shadow-[var(--color-gold)]/20"
                    >
                        {content.workflow.cta.label}
                        <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function TimelineStep({
    step,
    index,
}: {
    step: { time: string; action: string; feature: string; result: string };
    index: number;
}) {
    return (
        <motion.div
            className="flex gap-4 sm:gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
        >
            {/* Time badge */}
            <div className="relative z-10 flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-bg)] sm:h-[52px] sm:w-[52px]">
                <span className="text-[10px] font-bold text-[var(--color-gold)] sm:text-xs">{step.time}</span>
            </div>

            {/* Content card */}
            <div className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 transition-all hover:border-[var(--color-gold)]/20 hover:shadow-md">
                <p className="text-sm font-semibold text-[var(--color-text)] mb-2">
                    {step.action}
                </p>
                <p className="text-xs text-[var(--color-gold)] font-medium mb-1.5">
                    {step.feature}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    ✓ {step.result}
                </p>
            </div>
        </motion.div>
    );
}
