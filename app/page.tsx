'use client';

import { MainLayout } from '../components/layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { PageKey } from '../utils/navigation';

export default function Home() {
  const handleNavigate = (page: PageKey) => {
    if (page === 'services') {
      window.location.href = '/services';
    } else if (page === 'careers') {
      window.location.href = '/careers';
    } else if (page === 'contact') {
      window.location.href = '/contact';
    }
    // Home is the current page, so no navigation needed
  };

  return (
    <MainLayout activePage="home" onNavigate={handleNavigate}>
      <HomePage onNavigate={handleNavigate} />
    </MainLayout>
  );
}