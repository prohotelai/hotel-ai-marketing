'use client';

// Isolated Marketing Layer – No Core Access
// Bottom CTA Section component - Enterprise positioning

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export function CtaSection() {
  const { t } = useTranslation('marketing');

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          {t('bottomCta.title')}
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          {t('bottomCta.subtitle')}
        </p>
        
        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://hotel-ai-saas-amber.vercel.app/register"
            className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span>{t('bottomCta.button')}</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all border-2 border-white/30 hover:border-white/50 active:scale-95"
          >
            <span>{t('bottomCta.contact')}</span>
          </Link>
        </div>

        {/* Trust Note */}
        <p className="text-sm text-blue-100/80 flex items-center justify-center gap-3 flex-wrap">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            {t('bottomCta.note')}
          </span>
        </p>
      </div>
    </section>
  );
}
