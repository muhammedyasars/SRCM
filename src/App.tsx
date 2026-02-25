import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
type Page = 'home' | 'services' | 'careers' | 'contact';
export function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const handleNavigate = (page: Page) => {
    setActivePage(page);
  };
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'careers':
        return <CareersPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <div className="flex-1">{renderPage()}</div>
      <Footer onNavigate={handleNavigate} />
    </div>);

}