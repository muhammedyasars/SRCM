'use client';

import { MainLayout } from '../../components/layouts/MainLayout';
import { ContactPage } from '../../pages/ContactPage';
import { PageKey } from '../../utils/navigation';

export default function Contact() {
  const handleNavigate = (page: PageKey) => {
    if (page === 'home') {
      window.location.href = '/';
    } else if (page === 'services') {
      window.location.href = '/services';
    } else if (page === 'careers') {
      window.location.href = '/careers';
    }
    // Contact is the current page, so no navigation needed
  };

  return (
    <MainLayout activePage="contact" onNavigate={handleNavigate}>
      <ContactPage onNavigate={handleNavigate} />
    </MainLayout>
  );
}