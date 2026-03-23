import { content } from '@/config/content';

export default function Footer() {
    const { footer } = content;

    return (
        <footer id="contact" className="bg-[#0D0D0D] text-[#F0F0F0] border-t border-[#2A2A2A]">
            <div className="mx-auto max-w-[1200px] px-6 py-16">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand column */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B8963E] text-white text-sm font-bold">
                                M
                            </div>
                            <span className="text-xl font-bold tracking-tight">{footer.brand}</span>
                        </div>
                        <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
                            {footer.tagline}
                        </p>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed">
                            No credit card. No contract. Full platform. Managed setup.
                        </p>
                    </div>

                    {/* Link columns */}
                    {footer.columns.map((col, i) => (
                        <div key={i}>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9A9A9A] mb-5">
                                {col.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <a
                                            href={link.href}
                                            {...('external' in link && link.external
                                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                                : {})}
                                            className="text-sm text-[#9A9A9A] transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Legal bar */}
            <div className="border-t border-[#2A2A2A]">
                <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
                    <p className="text-xs text-[#6B6B6B]">{footer.legal.copyright}</p>
                    <div className="flex gap-6">
                        {footer.legal.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="text-xs text-[#6B6B6B] transition-colors hover:text-[#9A9A9A]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
