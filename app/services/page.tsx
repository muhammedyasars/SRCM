'use client';

import { MainLayout } from '../../components/layouts/MainLayout';
import { ServicesPage } from '../../pages/ServicesPage';
import { PageKey } from '../../utils/navigation';

export default function Services() {
  const handleNavigate = (page: PageKey) => {
    if (page === 'home') {
      window.location.href = '/';
    } else if (page === 'careers') {
      window.location.href = '/careers';
    } else if (page === 'contact') {
      window.location.href = '/contact';
    }
    // Services is the current page, so no navigation needed
  };

  return (
    <MainLayout activePage="services" onNavigate={handleNavigate}>
      <ServicesPage onNavigate={handleNavigate} />
    </MainLayout>
  );
}