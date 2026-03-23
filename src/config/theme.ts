export const theme = {
    colors: {
        gold: '#B8963E',
        goldLight: '#D4B96A',
        goldDark: '#8A6F2E',

        white: '#FFFFFF',
        light: '#F8F8F6',
        mid: '#E8E6E1',
        border: '#D4D2CD',

        dark: '#0D0D0D',
        darker: '#080808',
        grey: '#6B6B6B',
        greyLight: '#9A9A9A',

        green: '#2ECC71',
        greenLight: '#E8F8F0',

        red: '#E74C3C',
        redLight: '#FDE8E6',

        blue: '#3B82F6',
        blueLight: '#EBF2FF',

        purple: '#8B5CF6',
        purpleLight: '#F0EBFF',

        amber: '#F59E0B',
        amberLight: '#FEF3C7',

        orange: '#F97316',
        orangeLight: '#FFF1E6',

        teal: '#14B8A6',
        tealLight: '#E6FAF7',

        accent: '#B8963E',
    },

    dark: {
        bg: '#0D0D0D',
        bgAlt: '#141414',
        bgCard: '#1A1A1A',
        bgElevated: '#222222',
        text: '#F0F0F0',
        textMuted: '#9A9A9A',
        textSubtle: '#6B6B6B',
        border: '#2A2A2A',
        borderLight: '#333333',
    },

    light: {
        bg: '#FFFFFF',
        bgAlt: '#F8F8F6',
        bgCard: '#FFFFFF',
        bgElevated: '#F0F0EE',
        text: '#0D0D0D',
        textMuted: '#6B6B6B',
        textSubtle: '#9A9A9A',
        border: '#E8E6E1',
        borderLight: '#D4D2CD',
    },
} as const;

export type Theme = typeof theme;
