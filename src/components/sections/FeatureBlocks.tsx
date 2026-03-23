'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/config/content';

const featureVisuals: Record<string, React.ReactNode> = {
    rms: <RMSVisual />,
    pos: <POSVisual />,
    digital: <DigitalVisual />,
    analytics: <AnalyticsVisual />,
    security: <SecurityVisual />,
    brand: <BrandVisual />,
};

const sectionStyles: Record<number, string> = {
    0: 'bg-[var(--color-bg)]',
    1: 'bg-[var(--color-bg-alt)]',
    2: 'bg-[var(--color-bg)]',
    3: 'bg-[#0D0D0D] text-[#F0F0F0]', // dark section for analytics
    4: 'bg-[var(--color-bg-alt)]',
    5: 'bg-[#F8F5EE] [&_h2]:text-[#0D0D0D] [&_h3]:text-[#0D0D0D] [&_p]:text-[#6B6B6B] [&_li]:text-[#6B6B6B]', // warm section for brand
};

export default function FeatureBlocks() {
    return (
        <div id="features">
            {content.features.blocks.map((block, i) => (
                <FeatureBlock key={block.id} block={block} index={i} />
            ))}
        </div>
    );
}

function FeatureBlock({
    block,
    index,
}: {
    block: (typeof content.features.blocks)[number];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const reversed = index % 2 === 1;
    const sectionClass = sectionStyles[index] || 'bg-[var(--color-bg)]';

    return (
        <section className={`py-20 lg:py-28 ${sectionClass}`} ref={ref}>
            <div className={`mx-auto max-w-[1200px] px-6 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text side */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="mb-3 inline-block rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                        {block.tag}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {block.title}
                    </h2>
                    <h3 className="mt-3 text-lg font-medium text-[var(--color-text-muted)]">
                        {block.headline}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        {block.body}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2.5">
                        {block.bullets.map((bullet, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
                                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/15 text-[10px] text-[var(--color-gold)]">
                                    ✓
                                </span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="https://demo.manestro.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-light)]"
                    >
                        {block.ctaLabel}
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>

                {/* Visual side */}
                <motion.div
                    className="flex-1 flex items-center justify-center"
                    initial={{ opacity: 0, x: reversed ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    {featureVisuals[block.id]}
                </motion.div>
            </div>
        </section>
    );
}

/* ── Feature visuals ── */

function RMSVisual() {
    const tables = [
        { id: 'T1', status: 'Available', color: '#2ECC71' },
        { id: 'T2', status: 'Occupied', color: '#F59E0B' },
        { id: 'T3', status: 'Ordered', color: '#3B82F6' },
        { id: 'T4', status: 'Served', color: '#8B5CF6' },
        { id: 'T5', status: 'Available', color: '#2ECC71' },
        { id: 'T6', status: 'Checkout', color: '#F97316' },
        { id: 'T7', status: 'Cleaning', color: '#E74C3C' },
        { id: 'T8', status: 'Available', color: '#2ECC71' },
        { id: 'T9', status: 'Occupied', color: '#F59E0B' },
    ];

    return (
        <div className="w-full max-w-[420px] rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <p className="text-xs font-semibold text-[var(--color-text-subtle)] uppercase tracking-wider mb-4">Floor Map — Zone A</p>
            <div className="grid grid-cols-3 gap-2.5">
                {tables.map((t) => (
                    <div key={t.id} className="flex flex-col items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-3 px-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: t.color }} />
                        <span className="text-xs font-bold text-[var(--color-text)]">{t.id}</span>
                        <span className="text-[9px] text-[var(--color-text-subtle)]">{t.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function POSVisual() {
    return (
        <div className="w-full max-w-[420px] rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <p className="text-xs font-semibold text-[var(--color-text-subtle)] uppercase tracking-wider mb-4">Bill #1047 — Table 7</p>
            <div className="flex flex-col gap-2">
                {[
                    { item: 'Paneer Tikka', qty: 1, price: '₹320' },
                    { item: 'Butter Naan ×2', qty: 2, price: '₹120' },
                    { item: 'Dal Makhani', qty: 1, price: '₹280' },
                    { item: 'Masala Chai ×2', qty: 2, price: '₹80' },
                ].map((row, i) => (
                    <div key={i} className="flex justify-between text-sm">
                        <span className="text-[var(--color-text-muted)]">{row.item}</span>
                        <span className="font-medium text-[var(--color-text)]">{row.price}</span>
                    </div>
                ))}
                <div className="mt-2 border-t border-[var(--color-border)] pt-2 flex justify-between text-sm font-bold">
                    <span className="text-[var(--color-text)]">Total</span>
                    <span className="text-[var(--color-gold)]">₹800</span>
                </div>
            </div>
            <div className="mt-4 flex gap-2">
                <div className="flex-1 rounded-lg bg-[var(--color-gold)]/15 py-2 text-center text-[10px] font-semibold text-[var(--color-gold)]">Split Bill</div>
                <div className="flex-1 rounded-lg bg-[var(--color-gold)] py-2 text-center text-[10px] font-semibold text-white">Pay Now</div>
            </div>
        </div>
    );
}

function DigitalVisual() {
    return (
        <div className="w-full max-w-[420px] rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden">
            <div className="bg-[var(--color-bg-elevated)] px-4 py-2.5 flex items-center gap-2 border-b border-[var(--color-border)]">
                <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-[#E74C3C]" />
                    <div className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                    <div className="h-2 w-2 rounded-full bg-[#2ECC71]" />
                </div>
                <div className="flex-1 rounded bg-[var(--color-bg)] px-3 py-1 text-[10px] text-center text-[var(--color-text-subtle)]">yourrestaurant.manestro.in</div>
            </div>
            <div className="p-5">
                <div className="h-24 rounded-lg bg-gradient-to-br from-[#B8963E]/20 to-[#B8963E]/5 border border-[var(--color-gold)]/20 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-[var(--color-gold)]">Your Restaurant</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-[var(--color-bg-elevated)] p-3 text-center text-[10px] text-[var(--color-text-muted)]">📸 Gallery</div>
                    <div className="rounded-lg bg-[var(--color-bg-elevated)] p-3 text-center text-[10px] text-[var(--color-text-muted)]">📝 Blog</div>
                    <div className="rounded-lg bg-[var(--color-bg-elevated)] p-3 text-center text-[10px] text-[var(--color-text-muted)]">📋 Menu</div>
                    <div className="rounded-lg bg-[var(--color-bg-elevated)] p-3 text-center text-[10px] text-[var(--color-text-muted)]">📞 Contact</div>
                </div>
            </div>
        </div>
    );
}

function AnalyticsVisual() {
    const data = [
        { label: 'Mon', value: 65 },
        { label: 'Tue', value: 82 },
        { label: 'Wed', value: 58 },
        { label: 'Thu', value: 91 },
        { label: 'Fri', value: 100 },
        { label: 'Sat', value: 75 },
        { label: 'Sun', value: 88 },
    ];

    return (
        <div className="w-full max-w-[420px] rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-5">
            <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-1">Weekly Revenue</p>
            <p className="text-2xl font-bold text-white mb-4">₹2,68,400</p>
            <div className="flex items-end gap-2 h-28">
                {data.map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full rounded-t transition-all" style={{
                            height: `${d.value}%`,
                            background: d.value === 100 ? '#B8963E' : 'linear-gradient(180deg, #333, #222)',
                        }} />
                        <span className="text-[9px] text-[#6B6B6B]">{d.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SecurityVisual() {
    const items = [
        { icon: '🔐', label: '2FA Authentication' },
        { icon: '🔒', label: 'End-to-End Encryption' },
        { icon: '🛡️', label: 'Secure Payments' },
        { icon: '📍', label: 'Location Validation' },
        { icon: '📝', label: 'Audit Trails' },
        { icon: '👥', label: 'Role-Based Access' },
    ];

    return (
        <div className="w-full max-w-[420px] grid grid-cols-3 gap-3">
            {items.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 transition-all hover:border-[var(--color-gold)]/30 hover:shadow-md">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] font-medium text-[var(--color-text-muted)] text-center leading-tight">{item.label}</span>
                </div>
            ))}
        </div>
    );
}

function BrandVisual() {
    return (
        <div className="w-full max-w-[420px] flex flex-col gap-3">
            {[
                { label: 'Tent QR Cards', desc: 'Branded cards for every table', icon: '🃏' },
                { label: 'QR Stickers', desc: 'Durable, scannable, custom-designed', icon: '📎' },
                { label: 'Physical Menus', desc: 'Printed and delivered to your outlet', icon: '📖' },
                { label: 'Business Cards', desc: 'With embedded QR to your platform', icon: '💼' },
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-[#D4B96A]/20 bg-white/80 p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                        <p className="text-sm font-semibold text-[#0D0D0D]">{item.label}</p>
                        <p className="text-xs text-[#6B6B6B]">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
