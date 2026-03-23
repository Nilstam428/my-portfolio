'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { content } from '@/config/content';

function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = value;
        const duration = 1500;
        const startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * end);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [inView, value]);

    return <span>{count}%</span>;
}

export default function BusinessImpact() {
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
                        {content.impact.headline}
                    </h2>
                    <p className="mt-4 text-lg text-[var(--color-text-muted)]">
                        {content.impact.subheadline}
                    </p>
                </motion.div>

                {/* Before/After Table */}
                <motion.div
                    className="mb-14 overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-[var(--color-border)]">
                                <th className="text-left py-3 pr-4 text-[var(--color-text-muted)] font-semibold">Metric</th>
                                <th className="text-left py-3 px-4 text-[var(--color-text-muted)] font-semibold">Before</th>
                                <th className="text-left py-3 px-4 text-[var(--color-text-muted)] font-semibold">With Manestro</th>
                                <th className="text-right py-3 pl-4 text-[var(--color-text-muted)] font-semibold">Impact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.impact.beforeAfter.map((row, i) => (
                                <tr key={i} className="border-b border-[var(--color-border)]/50">
                                    <td className="py-3 pr-4 font-medium text-[var(--color-text)]">{row.metric}</td>
                                    <td className="py-3 px-4 text-[var(--color-text-muted)]">{row.before}</td>
                                    <td className="py-3 px-4 text-[var(--color-gold)] font-medium">{row.after}</td>
                                    <td className="py-3 pl-4 text-right">
                                        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${row.change.startsWith('+') ? 'bg-[#2ECC71]/15 text-[#2ECC71]' : 'bg-[#3B82F6]/15 text-[#3B82F6]'
                                            }`}>
                                            {row.change}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Animated Bar Chart */}
                <div className="mb-14">
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-8 text-center">Performance Improvements</h3>
                    <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
                        {content.impact.barChart.map((bar, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                            >
                                <span className="w-[180px] text-xs text-[var(--color-text-muted)] text-right flex-shrink-0 hidden sm:block">{bar.label}</span>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 sm:hidden mb-1">
                                        <span className="text-[11px] text-[var(--color-text-muted)]">{bar.label}</span>
                                    </div>
                                    <div className="h-8 w-full rounded-full bg-[var(--color-bg-elevated)] overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full flex items-center justify-end pr-3"
                                            style={{ backgroundColor: bar.color }}
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${bar.value}%` } : { width: 0 }}
                                            transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <span className="text-xs font-bold text-white">
                                                <AnimatedNumber value={bar.value} inView={isInView} />
                                            </span>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Savings Comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-6 text-center">What You No Longer Pay For</h3>
                    <div className="overflow-x-auto mb-4">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-[var(--color-border)]">
                                    <th className="text-left py-3 pr-4 text-[var(--color-text-muted)] font-semibold">Service</th>
                                    <th className="text-left py-3 px-4 text-[var(--color-text-muted)] font-semibold">Market Rate</th>
                                    <th className="text-left py-3 pl-4 text-[var(--color-gold)] font-semibold">Manestro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content.impact.savings.map((row, i) => (
                                    <tr key={i} className="border-b border-[var(--color-border)]/50">
                                        <td className="py-2.5 pr-4 text-[var(--color-text)]">{row.item}</td>
                                        <td className="py-2.5 px-4 text-[var(--color-text-muted)]">{row.market}</td>
                                        <td className="py-2.5 pl-4 font-medium text-[var(--color-gold)]">{row.manestro}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="border-t-2 border-[var(--color-border)]">
                                    <td className="py-3 pr-4 font-bold text-[var(--color-text)]">Total Monthly Estimate</td>
                                    <td className="py-3 px-4 font-bold text-[var(--color-text-muted)]">{content.impact.savingsTotal.market}</td>
                                    <td className="py-3 pl-4 font-bold text-[var(--color-gold)] text-lg">{content.impact.savingsTotal.manestro}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
