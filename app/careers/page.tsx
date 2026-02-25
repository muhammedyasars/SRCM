'use client';

import { MainLayout } from '../../components/layouts/MainLayout';
import { CareersPage } from '../../pages/CareersPage';
import { PageKey } from '../../utils/navigation';

export default function Careers() {
  const handleNavigate = (page: PageKey) => {
    if (page === 'home') {
      window.location.href = '/';
    } else if (page === 'services') {
      window.location.href = '/services';
    } else if (page === 'contact') {
      window.location.href = '/contact';
    }
    // Careers is the current page, so no navigation needed
  };

  return (
    <MainLayout activePage="careers" onNavigate={handleNavigate}>
      <CareersPage onNavigate={handleNavigate} />
    </MainLayout>
  );
}