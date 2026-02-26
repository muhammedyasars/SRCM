'use client';

import { MainLayout } from '../../components/layouts/MainLayout';
import { ContactPage } from '../../pages/ContactPage';

export default function Contact() {
  return (
    <MainLayout activePage="contact">
      <ContactPage />
    </MainLayout>
  );
}