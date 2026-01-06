'use client';

// Isolated Marketing Layer – No Core Access
// Hero Section component for landing page
// Matches prohotelai.com reference design: deep navy background, large text

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export function HeroSection() {
  const { t } = useTranslation('marketing');

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-850 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT ZONE - Content */}
          <div className="text-center lg:text-start space-y-6">
            {/* Large headline matching prohotelai.com style */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
              {t('hero.title')}
            </h1>
            
            {/* Subheadline - 3 lines with clear spacing */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            {/* CTA buttons row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* Primary CTA - Solid blue */}
              <a
                href="https://hotel-ai-saas-amber.vercel.app/register"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[3.5rem]"
              >
                <span>{t('hero.cta.primary')}</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" className="rtl:rotate-180" />
                </svg>
              </a>
              
              {/* Secondary CTA - Ghost white */}
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 min-h-[3.5rem] backdrop-blur-sm"
              >
                <span>{t('hero.cta.secondary')}</span>
              </Link>
            </div>

            {/* Trust hint - subtle */}
            <p className="text-sm text-gray-400 pt-2">
              {t('hero.trustHint')}
            </p>
          </div>

          {/* RIGHT ZONE - Premium Visual */}
          <div className="relative order-first lg:order-last mt-8 lg:mt-0">
            {/* Main dashboard preview with border glow */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src="/images/ai-hotel-assistant.png"
                alt="AI Hotel Dashboard Preview"
                width={800}
                height={600}
                priority
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating status badge - top right */}
            <div className="absolute -top-4 -right-4 bg-white/10 rounded-2xl shadow-xl p-4 border border-white/20 hidden sm:block backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-blue-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">AI Active</p>
                  <p className="text-xs text-gray-400">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
