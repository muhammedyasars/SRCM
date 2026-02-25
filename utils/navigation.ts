'use client';

import { ROUTES } from '../constants';

export type PageKey = 'home' | 'services' | 'careers' | 'contact';

export const navigateToPage = (page: PageKey): void => {
  switch (page) {
    case 'home':
      window.location.href = ROUTES.HOME;
      break;
    case 'services':
      window.location.href = ROUTES.SERVICES;
      break;
    case 'careers':
      window.location.href = ROUTES.CAREERS;
      break;
    case 'contact':
      window.location.href = ROUTES.CONTACT;
      break;
    default:
      window.location.href = ROUTES.HOME;
  }
};

export const getPageTitle = (page: PageKey): string => {
  switch (page) {
    case 'home':
      return 'Home';
    case 'services':
      return 'Our Services';
    case 'careers':
      return 'Careers';
    case 'contact':
      return 'Contact Us';
    default:
      return 'Home';
  }
};