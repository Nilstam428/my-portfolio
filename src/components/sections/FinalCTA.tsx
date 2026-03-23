'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/config/content';

export default function FinalCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="bg-[#0D0D0D] py-24 lg:py-32" ref={ref}>
            <div className="mx-auto max-w-[800px] px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {content.finalCta.headline}
                    </h2>
                    <p className="mt-5 text-lg text-[#9A9A9A]">
                        {content.finalCta.sub}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <a
                            href={content.finalCta.primaryCta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-[#B8963E] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#8A6F2E] hover:shadow-xl hover:shadow-[#B8963E]/25"
                        >
                            {content.finalCta.primaryCta.label}
                            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </a>
                        <a
                            href={content.finalCta.secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-full border border-[#333] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#1A1A1A]"
                        >
                            {content.finalCta.secondaryCta.label}
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        {content.finalCta.trustItems.map((item, i) => (
                            <span key={i} className="flex items-center gap-1.5 text-xs text-[#6B6B6B]">
                                <span className="text-[#B8963E]">✓</span>
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
