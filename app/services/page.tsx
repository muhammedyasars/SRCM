'use client';

import { MainLayout } from '../../components/layouts/MainLayout';
import { ServicesPage } from '../../pages/ServicesPage';

export default function Services() {
  return (
    <MainLayout activePage="services">
      <ServicesPage />
    </MainLayout>
  );
}