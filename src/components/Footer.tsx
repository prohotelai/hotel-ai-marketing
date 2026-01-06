'use client';

// Isolated Marketing Layer – No Core Access
// Footer component with company information

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const { t } = useTranslation('common');

  const productLinks = [
    { href: '/features', label: t('nav.features') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/#how-it-works', label: t('footer.howItWorks') },
  ];

  const companyLinks = [
    { href: '/affiliate', label: t('nav.affiliate') },
    { href: '/contact', label: t('nav.contact') },
    { href: '#', label: t('footer.careers') },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl">{t('appName')}</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {t('footer.description')}
            </p>
            {/* Company Details */}
            <div className="space-y-2 text-sm text-gray-400">
              <p className="font-semibold text-white">{t('footer.company.name')}</p>
              <p>{t('footer.company.address')}</p>
              <p>{t('footer.company.city')}</p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+447448810068" className="hover:text-white transition-colors">
                  {t('footer.company.phone')}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@proinvestglobal.com" className="hover:text-white transition-colors">
                  {t('footer.company.email')}
                </a>
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.sections.product')}</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.sections.company')}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Language */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.sections.legal')}</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
            
            {/* Language Switcher */}
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">{t('language.select')}</h4>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
