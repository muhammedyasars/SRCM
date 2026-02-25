export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  CAREERS: '/careers',
  CONTACT: '/contact',
} as const;

export const NAVIGATION = [
  { label: 'Home', path: ROUTES.HOME, key: 'home' },
  { label: 'Services', path: ROUTES.SERVICES, key: 'services' },
  { label: 'Careers', path: ROUTES.CAREERS, key: 'careers' },
  { label: 'Contact', path: ROUTES.CONTACT, key: 'contact' },
] as const;

export const COLORS = {
  PRIMARY: {
    NAVY: '#1B3A6B',
    NAVY_LIGHT: '#243F7A',
    NAVY_DARK: '#142d54',
  },
  SECONDARY: {
    GREEN: '#2D7A3A',
    GREEN_LIGHT: '#3A9447',
    GREEN_PALE: '#e8f5ea',
  },
  NEUTRAL: {
    BG_LIGHT: '#F0F4F8',
    BG_LIGHTER: '#F8FAFC',
    TEXT_DARK: '#0F1F3D',
    TEXT_MUTED: '#5A6A85',
  },
} as const;

export const ANIMATION = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
    XL: 0.8,
  },
  EASING: {
    DEFAULT: [0.25, 0.1, 0.25, 1],
    SMOOTH: [0.42, 0, 0.58, 1],
    BOUNCE: [0.68, -0.55, 0.265, 1.55],
  },
} as const;