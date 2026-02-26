import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '../constants';
type Page = 'home' | 'services' | 'careers' | 'contact';
interface NavbarProps {
  activePage?: Page;
  onNavigate?: (page: Page) => void;
}
export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  
  const getActivePage = (): Page => {
    if (pathname === ROUTES.SERVICES) return 'services';
    if (pathname === ROUTES.CAREERS) return 'careers';
    if (pathname === ROUTES.CONTACT) return 'contact';
    return 'home';
  };
  
  const currentPage = activePage || getActivePage();
  const navLinks: {
    label: string;
    page: Page;
  }[] = [
  {
    label: 'Home',
    page: 'home'
  },
  {
    label: 'Services',
    page: 'services'
  },
  {
    label: 'Careers',
    page: 'careers'
  },
  {
    label: 'Contact',
    page: 'contact'
  }];

  const handleNav = (page: Page) => {
    setMobileOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-nav border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-3 focus:outline-none"
            aria-label="Streamline RCM - Go to home"
            onClick={() => handleNav('home')}>

            <img
              src="/WhatsApp_Image_2026-02-25_at_2.06.59_PM-removebg-preview.png"
              alt="Streamline RCM Logo"
              className="h-12 md:h-14 w-auto object-contain" />

          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const href = link.page === 'home' ? ROUTES.HOME : 
                           link.page === 'services' ? ROUTES.SERVICES :
                           link.page === 'careers' ? ROUTES.CAREERS : ROUTES.CONTACT;
              
              return (
                <Link
                  key={link.page}
                  href={href}
                  onClick={() => handleNav(link.page)}
                  className={`nav-link font-heading font-medium text-sm tracking-wide transition-colors ${currentPage === link.page ? 'text-[#1B3A6B] active' : 'text-gray-600 hover:text-[#1B3A6B]'}`}>

                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2D7A3A] transition-colors">

              <PhoneIcon className="w-4 h-4" />
              <span className="font-body">+971 XX XXX XXXX</span>
            </a>
            <Link
              href={ROUTES.CONTACT}
              onClick={() => handleNav('contact')}
              className="btn-primary text-sm px-5 py-2.5">

              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#1B3A6B] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>

            {mobileOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen &&
      <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const href = link.page === 'home' ? ROUTES.HOME : 
                           link.page === 'services' ? ROUTES.SERVICES :
                           link.page === 'careers' ? ROUTES.CAREERS : ROUTES.CONTACT;
              
              return (
                <Link
                  key={link.page}
                  href={href}
                  onClick={() => handleNav(link.page)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-heading font-medium text-sm transition-colors ${currentPage === link.page ? 'bg-[#EEF2F9] text-[#1B3A6B]' : 'text-gray-600 hover:bg-gray-50 hover:text-[#1B3A6B]'}`}>

                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 pb-1">
              <Link
                href={ROUTES.CONTACT}
                onClick={() => handleNav('contact')}
                className="btn-primary w-full justify-center text-sm">

                Contact Us
              </Link>
            </div>
          </div>
        </div>
      }
    </nav>);

}