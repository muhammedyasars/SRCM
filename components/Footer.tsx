import React from 'react';
import {
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  MapPinIcon,
  ArrowRightIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon } from
'lucide-react';
type Page = 'home' | 'services' | 'careers' | 'contact';
interface FooterProps {
  onNavigate: (page: Page) => void;
}
export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="bg-[#0d1f3c] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src="/WhatsApp_Image_2026-02-25_at_2.06.59_PM-removebg-preview.png"
              alt="Streamline RCM"
              className="h-14 w-auto object-contain mb-5 brightness-0 invert" />

            <p className="text-gray-400 text-sm leading-relaxed font-body mb-6">
              Trusted Revenue Cycle Management solutions provider serving
              healthcare organizations across the Middle East and beyond.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2D7A3A] transition-colors">

                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2D7A3A] transition-colors">

                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2D7A3A] transition-colors">

                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-5 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
              {
                label: 'Home',
                page: 'home' as Page
              },
              {
                label: 'Our Services',
                page: 'services' as Page
              },
              {
                label: 'Careers',
                page: 'careers' as Page
              },
              {
                label: 'Contact Us',
                page: 'contact' as Page
              }].
              map((item) =>
              <li key={item.page}>
                  <button
                  onClick={() => handleNav(item.page)}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#3A9447] transition-colors text-sm font-body group">

                    <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-5 text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
              'Preauthorization',
              'Clinical Documentation',
              'Revenue Optimization',
              'Claims Management',
              'Denial Management',
              'Medical Transcription',
              'RCM Consultancy'].
              map((service) =>
              <li key={service}>
                  <button
                  onClick={() => handleNav('services')}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#3A9447] transition-colors text-sm font-body group">

                    <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-5 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2D7A3A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <PhoneIcon className="w-4 h-4 text-[#3A9447]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-body mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+97100000000"
                    className="text-gray-300 text-sm hover:text-white transition-colors font-body">

                    +971 XX XXX XXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2D7A3A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MailIcon className="w-4 h-4 text-[#3A9447]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-body mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:info@streamlinercm.com"
                    className="text-gray-300 text-sm hover:text-white transition-colors font-body">

                    info@streamlinercm.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2D7A3A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GlobeIcon className="w-4 h-4 text-[#3A9447]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-body mb-0.5">
                    Website
                  </p>
                  <span className="text-gray-300 text-sm font-body">
                    www.streamlinercm.com
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2D7A3A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPinIcon className="w-4 h-4 text-[#3A9447]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-body mb-0.5">
                    Location
                  </p>
                  <span className="text-gray-300 text-sm font-body">
                    Middle East & Beyond
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm font-body text-center sm:text-left">
            © 2025 Streamline RCM. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-body">
            Streamlining Revenue. Strengthening Healthcare.
          </p>
        </div>
      </div>
    </footer>);

}