'use client';

import { MainLayout } from '../components/layouts/MainLayout';
import { HomePage } from '../pages/HomePage';

export default function Home() {
  return (
    <MainLayout activePage="home">
      <HomePage />
    </MainLayout>
  );
}