export const content = {
    nav: {
        brand: 'Manestro',
        links: [
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
        ],
        ctaLabel: 'Try Live Demo',
        ctaHref: 'https://demo.manestro.in',
    },

    hero: {
        eyebrow: 'Restaurant Intelligence Platform',
        headline: 'Everything Your Restaurant Needs. One Platform.',
        subheadline: 'Manestro replaces your POS, management software, QR menu system, website builder, analytics tools, and payment setup — with one unified platform built for restaurants of every size. Explore the live platform free, right now.',
        primaryCta: { label: 'Try the Live Demo', href: 'https://demo.manestro.in' },
        secondaryCta: { label: 'Start Free — No Card Required', href: '/signup' },
        trustLine: 'No credit card. No setup fee. Full platform access.',
    },

    credibility: {
        text: 'Trusted by restaurants, cafes, franchises, and hotel operators across India.',
    },

    problem: {
        headline: 'The Problem Every Restaurant Knows',
        subheadline: 'Running a restaurant shouldn\'t mean managing a dozen disconnected tools.',
        items: [
            {
                title: 'Too Many Tools, Too Little Control',
                pain: 'POS from one vendor, QR menus from another, analytics from a third — none of them talk to each other.',
                solution: 'Manestro unifies everything into one platform.',
            },
            {
                title: 'Setup Costs That Add Up Fast',
                pain: 'Payment gateway fees, domain charges, menu printing, website hosting — each one is another invoice.',
                solution: 'All included. No extra fees. Managed setup.',
            },
            {
                title: 'Manual Processes That Break Down',
                pain: 'Paper KOTs get lost, verbal orders get wrong, menu changes take days to reprint.',
                solution: 'Automated KOT, digital ordering, real-time menu updates.',
            },
            {
                title: 'No Visibility Into Performance',
                pain: 'You don\'t know your best-selling item, busiest hour, or slowest table — until it\'s too late.',
                solution: 'Real-time analytics dashboard with actionable insights.',
            },
        ],
    },

    solution: {
        headline: 'One Platform. Every Function.',
        body: 'Manestro replaces 6–12 separate subscriptions with a single, integrated system — POS, restaurant management, QR menus, analytics, website, digital billing, inventory, staff control, and payment processing. All managed. All connected.',
        cta: { label: 'Try the Live Demo', href: 'https://demo.manestro.in' },
        trustLine: 'No credit card. No contract. Full platform. Managed setup.',
    },

    workflow: {
        headline: 'A Day with Manestro',
        subheadline: 'See how the platform works across a full operational day — from opening to close.',
        steps: [
            { time: '09:00', action: 'Owner logs in and reviews overnight analytics summary', feature: 'Analytics Dashboard — revenue, top items, staff performance', result: 'Full overnight picture in under 60 seconds' },
            { time: '10:30', action: 'Staff opens the outlet. Tables set and allocated.', feature: 'Table Allocation System — all tables set to: Available', result: 'Live floor map shows every table open and ready' },
            { time: '12:00', action: 'First guests arrive. Seated at Table 7.', feature: 'QR activates at Table 7. Status: Occupied', result: 'Guests scan, browse live menu, order directly from their phones' },
            { time: '12:05', action: 'Order placed via QR.', feature: 'Ordering Panel receives. KOT auto-generated. KDS updates.', result: 'Kitchen sees the order instantly. No paper. No verbal relay.' },
            { time: '12:20', action: 'Food served to Table 7.', feature: 'Table status updated: Served. Waiter notified via panel.', result: 'Floor map updates in real time.' },
            { time: '12:40', action: 'Guests request the bill. One item split between two guests.', feature: 'Bill Splitting System — separate tabs per guest', result: 'Two digital bills generated and downloadable immediately' },
            { time: '12:45', action: 'Payment processed.', feature: 'Secure Payment Gateway. CRM entry saved automatically.', result: 'Revenue recorded. Customer added to database.' },
            { time: '13:00', action: 'Table 7 vacated.', feature: 'Status: Cleaning Required. Cleaning staff notified.', result: 'Table locked from new allocation until cleared.' },
            { time: '14:00', action: 'Manager reviews lunch rush performance.', feature: 'Real-time analytics — peak order time, avg spend, top items', result: 'Decision made to promote an underperforming item with a combo' },
            { time: '14:10', action: 'New combo offer created in the dashboard.', feature: 'Menu & Offers Manager — live in 30 seconds', result: 'QR menus across all tables update instantly. No reprinting.' },
            { time: '19:00', action: 'Inventory check before dinner service.', feature: 'Inventory Management — low-stock alert for two items', result: 'Items flagged. Availability updated on menu from phone.' },
            { time: '22:30', action: 'Close of business.', feature: 'End-of-day analytics auto-compiled', result: 'Revenue, covers, item performance, staff hours — all ready.' },
        ],
        closingLine: 'Every step. Every table. Every rupee. One system.',
        cta: { label: 'Try the Live Demo', href: 'https://demo.manestro.in' },
    },

    features: {
        blocks: [
            {
                id: 'rms',
                tag: 'Restaurant Management',
                title: 'Complete Restaurant Management System',
                headline: 'Run your entire operation from one dashboard.',
                body: 'Table allocation, staff management, venue zones, floor maps, menu control, offers, combos, and real-time status tracking — all unified in a single system designed specifically for restaurant workflows.',
                bullets: ['Table status flow with 6 states', 'Multi-zone venue management', 'Staff roles with granular permissions', 'Menu, category, and offer management', 'Real-time floor plan with live updates'],
                ctaLabel: 'Explore the Platform',
            },
            {
                id: 'pos',
                tag: 'Point of Sale',
                title: 'Native POS — Built In, Not Bolted On',
                headline: 'Fast, reliable, purpose-built for restaurants.',
                body: 'Manestro\'s POS isn\'t a third-party integration — it\'s built into the platform. Digital billing, order editing, cancellation with audit trails, bill splitting and merging, per-customer tabs, and instant bill download.',
                bullets: ['Native POS — no third-party dependency', 'Bill splitting, merging, per-customer tabs', 'Order editing and cancellation audit trail', 'Digital billing with instant download', 'Kiosk mode and self-service panel'],
                ctaLabel: 'See POS in Action',
            },
            {
                id: 'digital',
                tag: 'Digital Presence',
                title: 'Your Restaurant\'s Digital Identity',
                headline: 'Website, domain, SEO, and QR — all managed for you.',
                body: 'Every Manestro client gets a custom landing page, blog system, gallery, legal pages, SEO dashboard, social media integration, custom domain with DNS management, and a QR code editor — all included, all managed.',
                bullets: ['Custom landing page and blog', 'SEO management with built-in tools', 'Custom domain with full DNS — no extra fees', 'QR code editor with per-table support', 'Social media integration'],
                ctaLabel: 'View Digital Features',
            },
            {
                id: 'analytics',
                tag: 'Analytics & Insights',
                title: 'Advanced Analytics Dashboard',
                headline: 'Know what\'s working. Fix what\'s not.',
                body: 'Revenue tracking, item performance, staff efficiency, peak hours, customer trends, table turn rates — all compiled automatically. Real-time data, not yesterday\'s report.',
                bullets: ['Real-time revenue and order tracking', 'Item-level performance analysis', 'Staff efficiency and shift metrics', 'Peak hour and trend identification', 'Customer database and CRM'],
                ctaLabel: 'Explore Analytics',
            },
            {
                id: 'security',
                tag: 'Security & Control',
                title: 'Safeguard Security System',
                headline: 'Enterprise-grade security for every restaurant.',
                body: 'Two-factor authentication, end-to-end encryption, secure payment gateway, session control, location-based order validation to prevent fake orders, and a full audit system for every edit and cancellation.',
                bullets: ['2FA and end-to-end encryption', 'Secure payment gateway', 'Session control and location validation', 'Order edit and cancellation audit system', 'Granular staff permission control'],
                ctaLabel: 'Learn About Security',
            },
            {
                id: 'brand',
                tag: 'Brand & Physical',
                title: 'Your Brand, Printed and Delivered',
                headline: 'Tent cards, stickers, menus, and business cards — on us.',
                body: 'On evaluation, Manestro provides free printing and installation of tent QR cards, QR stickers, physical menus, and business cards with QR codes. Assessed per business, delivered directly.',
                bullets: ['Tent QR cards and stickers', 'Printed physical menus', 'Business cards with QR codes', 'Free printing and installation', 'Butler-style direct support'],
                ctaLabel: 'Get Started',
            },
        ],
    },

    impact: {
        headline: 'The Business Impact',
        subheadline: 'Real improvements across every metric that matters.',
        beforeAfter: [
            { metric: 'Monthly software cost', before: '₹32,000–₹75,000+', after: 'From ₹990/month', change: '-95%' },
            { metric: 'Setup / onboarding cost', before: '₹10,000–₹50,000', after: '₹0 managed, free', change: '-100%' },
            { metric: 'Tools in use', before: '6–12 subscriptions', after: '1 unified platform', change: '-83%' },
            { metric: 'Order error rate (KOT)', before: '8–15%', after: '<1% automated', change: '-92%' },
            { metric: 'Table turn time', before: '52 minutes avg', after: '38 minutes', change: '-27%' },
            { metric: 'Bill settlement', before: '6–10 minutes', after: '90 seconds', change: '-85%' },
            { metric: 'Menu update lag', before: '1–3 days (reprint)', after: '30 seconds, real-time', change: '-99%' },
            { metric: 'Support response', before: '24–72 hours', after: 'Direct, same session', change: '-96%' },
            { metric: 'Repeat customer rate', before: 'Baseline', after: '+18–22% uplift', change: '+20%' },
        ],
        barChart: [
            { label: 'Order Accuracy (KOT/KDS)', value: 99, color: '#2ECC71' },
            { label: 'Setup Cost Reduction', value: 97, color: '#3B82F6' },
            { label: 'Monthly Cost Reduction', value: 95, color: '#B8963E' },
            { label: 'Bill Settlement Speed', value: 85, color: '#8B5CF6' },
            { label: 'Table Turn Improvement', value: 27, color: '#F59E0B' },
            { label: 'Repeat Customer Uplift', value: 22, color: '#14B8A6' },
        ],
        savings: [
            { item: 'Restaurant POS Software', market: '₹3,000–₹8,000/mo', manestro: 'Included' },
            { item: 'Restaurant Management System', market: '₹4,000–₹12,000/mo', manestro: 'Included' },
            { item: 'Business Website + Hosting', market: '₹2,000–₹5,000/mo', manestro: 'Included' },
            { item: 'QR Menu System', market: '₹1,500–₹4,000/mo', manestro: 'Included' },
            { item: 'Inventory Management', market: '₹2,000–₹6,000/mo', manestro: 'Included' },
            { item: 'Payment Gateway Setup', market: '₹5,000–₹15,000 once', manestro: 'Free' },
            { item: 'SEO & Analytics Tools', market: '₹3,000–₹8,000/mo', manestro: 'Included' },
            { item: 'Custom Domain & DNS', market: '₹1,000–₹3,000/mo', manestro: 'No extra fees' },
            { item: 'Staff & Permission Tools', market: '₹1,500–₹4,000/mo', manestro: 'Included' },
            { item: 'Brand Kit & QR Materials', market: '₹3,000–₹10,000 once', manestro: 'Free on evaluation' },
        ],
        savingsTotal: { market: '₹26,000–₹75,000+', manestro: 'From ₹990/month' },
    },

    comingSoon: {
        headline: 'What\'s Coming Next',
        items: [
            { title: 'AI-Automated Dashboard', description: 'Autonomous actions within the ecosystem — the dashboard that runs itself.' },
            { title: 'Smart IoT Integration', description: 'Connected devices within your premises — automated lighting, kitchen alerts, and table sensors.' },
            { title: 'Custom Branded App', description: 'Your restaurant\'s own mobile application — built to your brand, published to app stores.' },
        ],
    },

    pricing: {
        headline: 'Simple, Transparent Pricing',
        subheadline: 'Every plan includes the full platform. No hidden fees. No feature gates.',
        trustLine: 'No credit card. No contract. Full platform. Managed setup.',
        plans: [
            {
                name: 'Free Trial',
                price: '₹0',
                period: 'forever',
                description: 'Full platform, no card, no time limit, no feature restrictions.',
                features: ['All platform features', 'Unlimited trial period', 'No credit card required', 'Full support access', 'Managed setup'],
                cta: { label: 'Start Free — No Card Required', href: '/signup' },
                highlighted: false,
            },
            {
                name: 'Starter',
                price: '₹990',
                period: '/month',
                description: 'For single-location restaurants getting started.',
                features: ['All platform features', 'POS + RMS + QR menus', 'Custom website + domain', 'Payment gateway setup', 'Priority support'],
                cta: { label: 'Start Free — No Card Required', href: '/signup' },
                highlighted: false,
            },
            {
                name: 'Growth',
                price: '₹2,490',
                period: '/month',
                description: 'For restaurants scaling their operations.',
                features: ['Everything in Starter', 'Advanced analytics', 'Multi-zone management', 'SEO dashboard', 'Brand kit + QR materials'],
                cta: { label: 'Start Free — No Card Required', href: '/signup' },
                highlighted: true,
            },
            {
                name: 'Pro',
                price: '₹4,990',
                period: '/month',
                description: 'For multi-location and franchise operations.',
                features: ['Everything in Growth', 'Multi-venue support', 'Custom roles + permissions', 'API access', 'Dedicated account manager'],
                cta: { label: 'Start Free — No Card Required', href: '/signup' },
                highlighted: false,
            },
        ],
        custom: {
            name: 'Custom',
            description: 'For large-scale, multi-brand, or enterprise requirements. Price negotiated after full business overview.',
            cta: { label: 'Get in Touch', href: '#contact' },
        },
        footerNote: 'All plans exclude separately applied offers and discounts.',
    },

    comparison: {
        headline: 'Manestro vs. The Market',
        rows: [
            { feature: 'Unified POS + RMS', market: 'Separate subscriptions', manestro: 'Single integrated platform' },
            { feature: 'QR Menu System', market: '₹1,500–₹4,000/mo extra', manestro: 'Included in every plan' },
            { feature: 'Custom Website + Domain', market: '₹2,000–₹5,000/mo + DNS', manestro: 'Included — no extra fees' },
            { feature: 'Payment Gateway', market: '₹5,000–₹15,000 setup', manestro: 'Free setup and management' },
            { feature: 'SEO & Analytics', market: 'External tools required', manestro: 'Built-in dashboard' },
            { feature: 'Staff Permissions', market: 'Basic roles only', manestro: 'Granular custom roles' },
            { feature: 'Brand Kit & Printing', market: 'Not included', manestro: 'Free on evaluation' },
            { feature: 'Setup & Onboarding', market: '₹10,000–₹50,000', manestro: 'Fully managed, free' },
            { feature: 'Support', market: 'Ticket queue, 24–72 hrs', manestro: 'Butler-style, same session' },
            { feature: 'Starting Price', market: '₹26,000–₹75,000+/mo', manestro: 'From ₹990/month' },
        ],
    },

    testimonials: {
        headline: 'What Operators Say',
        items: [
            {
                quote: 'Manestro replaced five different tools we were paying for. The setup was handled for us — we just logged in and started.',
                author: 'Restaurant Operator',
                role: 'Fine Dining, Mumbai',
            },
            {
                quote: 'Our table turn time dropped by almost 30%. The QR ordering and digital billing changed how we run lunch service.',
                author: 'QSR Owner',
                role: 'Quick Service Restaurant, Delhi',
            },
            {
                quote: 'The analytics alone are worth it. We finally know what sells, what doesn\'t, and why.',
                author: 'Café Manager',
                role: 'Multi-location Café Chain',
            },
        ],
    },

    faq: {
        headline: 'Frequently Asked Questions',
        items: [
            { question: 'Is there really no credit card required for the demo or free trial?', answer: 'Correct. No card, no payment details, no commitment of any kind. Create an account or get in touch and access the full platform immediately.' },
            { question: 'How long does the free trial last?', answer: 'Until your team is satisfied. No fixed end date. No questions asked.' },
            { question: 'Does the demo show the real platform or a simplified version?', answer: 'The demo at demo.manestro.in is the live platform. Everything you see is exactly what you get.' },
            { question: 'Who handles setup and installation?', answer: 'Manestro does. Domain configuration, menu loading, staff accounts, payment gateway — all set up by us at no cost.' },
            { question: 'Can Manestro handle multiple locations or a franchise chain?', answer: 'Yes. The platform supports multi-venue, multi-zone, and multi-brand operations. A custom plan is available for large-scale requirements.' },
            { question: 'Is the payment gateway really free to set up?', answer: 'Yes. Setup, integration, and ongoing management are included at no additional charge in every plan.' },
            { question: 'What happens to my data if I decide not to continue?', answer: 'Your data belongs to you. We provide an export and clear it from our systems on request.' },
            { question: 'What does \'butler-level support\' actually mean?', answer: 'Direct access across every connectable channel — no ticket queue, no automated deflection. Real help, fast, from someone who knows your setup.' },
        ],
    },

    finalCta: {
        headline: 'Ready to see what one platform can do?',
        sub: 'Explore the full Manestro platform — live, right now, free.',
        primaryCta: { label: 'Try the Live Demo', href: 'https://demo.manestro.in' },
        secondaryCta: { label: 'Start Free — No Card Required', href: '/signup' },
        trustItems: ['No credit card', 'No contract', 'Full platform', 'Managed setup'],
    },

    footer: {
        brand: 'Manestro',
        tagline: 'Restaurant Intelligence Platform',
        columns: [
            {
                title: 'Platform',
                links: [
                    { label: 'Features', href: '#features' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'Live Demo', href: 'https://demo.manestro.in', external: true },
                    { label: 'Sign Up', href: '/signup' },
                ],
            },
            {
                title: 'Resources',
                links: [
                    { label: 'Contact', href: '#contact' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Blog', href: '/blog' },
                ],
            },
            {
                title: 'Legal',
                links: [
                    { label: 'Terms of Service', href: '/terms' },
                    { label: 'Privacy Policy', href: '/privacy' },
                    { label: 'Refund Policy', href: '/refund' },
                ],
            },
        ],
        legal: {
            copyright: `© ${new Date().getFullYear()} Manestro. All rights reserved.`,
            links: [
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Refund Policy', href: '/refund' },
            ],
        },
    },
} as const;
