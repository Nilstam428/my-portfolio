export const components = {
    button: {
        primary: {
            bg: 'var(--color-gold)',
            text: '#FFFFFF',
            border: 'transparent',
            hover: 'var(--color-gold-dark)',
            radius: '9999px',
            padding: '0.75rem 2rem',
        },
        secondary: {
            bg: 'transparent',
            text: 'var(--color-text)',
            border: 'var(--color-border)',
            hover: 'var(--color-bg-alt)',
            radius: '9999px',
            padding: '0.75rem 2rem',
        },
        ghost: {
            bg: 'transparent',
            text: 'var(--color-gold)',
            border: 'transparent',
            hover: 'var(--color-gold-light)',
            radius: '0.5rem',
            padding: '0.5rem 1rem',
        },
    },

    card: {
        default: {
            bg: 'var(--color-bg-card)',
            border: 'var(--color-border)',
            radius: '0.75rem',
            shadow: '0 1px 3px rgba(0,0,0,0.08)',
        },
        dark: {
            bg: '#1A1A1A',
            border: '#2A2A2A',
            radius: '0.75rem',
            shadow: '0 4px 24px rgba(0,0,0,0.3)',
        },
        feature: {
            bg: 'var(--color-bg-elevated)',
            border: 'var(--color-border-light)',
            radius: '1rem',
            shadow: '0 2px 8px rgba(0,0,0,0.04)',
        },
    },

    badge: {
        gold: {
            bg: 'rgba(184,150,62,0.15)',
            text: '#B8963E',
            border: 'rgba(184,150,62,0.3)',
        },
        green: {
            bg: 'rgba(46,204,113,0.15)',
            text: '#2ECC71',
            border: 'rgba(46,204,113,0.3)',
        },
        grey: {
            bg: 'rgba(107,107,107,0.15)',
            text: '#6B6B6B',
            border: 'rgba(107,107,107,0.3)',
        },
    },

    section: {
        dark: {
            bg: '#0D0D0D',
            text: '#F0F0F0',
            padding: '6rem 2rem',
        },
        light: {
            bg: '#FFFFFF',
            text: '#0D0D0D',
            padding: '6rem 2rem',
        },
        warm: {
            bg: '#F8F5EE',
            text: '#0D0D0D',
            padding: '6rem 2rem',
        },
    },
} as const;
