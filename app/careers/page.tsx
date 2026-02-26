'use client';

import { MainLayout } from '../../components/layouts/MainLayout';
import { CareersPage } from '../../pages/CareersPage';

export default function Careers() {
  return (
    <MainLayout activePage="careers">
      <CareersPage />
    </MainLayout>
  );
}