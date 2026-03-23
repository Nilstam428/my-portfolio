'use client';

import { useState, useEffect } from 'react';
import { content } from '@/config/content';
import { useTheme } from '@/providers/ThemeProvider';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        if (href.startsWith('#')) {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-[var(--color-bg)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]'
                        : 'bg-transparent'
                    }`}
                style={{ height: 'var(--nav-height)' }}
            >
                <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6">
                    {/* LEFT — Logo */}
                    <a href="/" className="flex items-center gap-2.5 no-underline">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-gold)] text-white text-sm font-bold">
                            M
                        </div>
                        <span className="text-xl font-bold tracking-tight text-[var(--color-text)]">
                            {content.nav.brand}
                        </span>
                    </a>

                    {/* CENTRE — Nav Pill + Theme Toggle (Desktop) */}
                    <div className="hidden items-center gap-3 md:flex">
                        {/* Bubble 1: Nav links pill */}
                        <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)]/60 backdrop-blur-sm px-1.5 py-1">
                            {content.nav.links.map((link, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleNavClick(link.href)}
                                    className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] hover:bg-[var(--color-bg-elevated)]"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Bubble 2: Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)]/60 backdrop-blur-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] hover:bg-[var(--color-bg-elevated)]"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* RIGHT — CTA (Desktop) + Hamburger (Mobile) */}
                    <div className="flex items-center gap-3">
                        <a
                            href={content.nav.ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden rounded-full bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-gold-dark)] hover:shadow-lg hover:shadow-[var(--color-gold)]/20 md:block"
                        >
                            {content.nav.ctaLabel}
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text)] md:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-[var(--color-bg)] pt-[var(--nav-height)] md:hidden">
                    <div className="flex flex-col items-center gap-6 p-8">
                        {content.nav.links.map((link, i) => (
                            <button
                                key={i}
                                onClick={() => handleNavClick(link.href)}
                                className="text-lg font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-gold)]"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="mt-2 flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
                        >
                            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                        </button>
                    </div>
                </div>
            )}

            {/* Mobile floating CTA */}
            <div className="fixed bottom-6 left-4 right-4 z-50 md:hidden">
                <a
                    href={content.nav.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full bg-[var(--color-gold)] py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--color-gold)]/25 transition-all hover:bg-[var(--color-gold-dark)]"
                >
                    {content.nav.ctaLabel}
                </a>
            </div>
        </>
    );
}
