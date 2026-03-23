export const animations = {
    duration: {
        fast: 0.2,
        normal: 0.4,
        slow: 0.6,
        slower: 0.8,
        slowest: 1.2,
    },

    easing: {
        easeOut: [0.16, 1, 0.3, 1] as const,
        easeInOut: [0.76, 0, 0.24, 1] as const,
        spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
        gentle: { type: 'spring' as const, stiffness: 120, damping: 20 },
    },

    scroll: {
        threshold: 0.15,
        triggerOnce: true,
    },

    fadeUp: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },

    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
    },

    scaleIn: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },

    stagger: {
        container: {
            animate: { transition: { staggerChildren: 0.08 } },
        },
        item: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
        },
    },

    countUp: {
        duration: 1.5,
        delay: 0.2,
    },

    barFill: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
    },
} as const;
