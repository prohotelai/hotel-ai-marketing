'use client';

// Isolated Marketing Layer – No Core Access
// Enhanced Pricing Page with Credit-Based Transparency
// Displays pricing tiers, credit usage explanation, and FAQ
// NO backend logic changes - display only

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function PricingPage() {
  const { t } = useTranslation('pricing');

  const plans = ['starter', 'professional', 'enterprise'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-850 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Credit Explainer Section */}
      <section className="py-12 bg-blue-50/30 border-y">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              {t('creditExplainer.title')}
            </h2>
            <p className="text-gray-600">
              {t('creditExplainer.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['chat', 'voice', 'automation'].map((type, idx) => (
              <div key={type} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {type === 'chat' && (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  {type === 'voice' && (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  )}
                  {type === 'automation' && (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t(`creditExplainer.items.${idx}.label`)}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(`creditExplainer.items.${idx}.description`)}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 italic">
              {t('creditExplainer.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan) => {
              const isProfessional = plan === 'professional';
              const isEnterprise = plan === 'enterprise';
              return (
                <div
                  key={plan}
                  className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                    isProfessional
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl ring-2 ring-blue-400 lg:scale-105 lg:-mt-4 lg:mb-4'
                      : isEnterprise
                      ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl border border-slate-700'
                      : 'bg-white text-gray-900 shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl'
                  }`}
                >
                  {/* Badge */}
                  {isProfessional && t(`plans.${plan}.badge`) && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                      {t(`plans.${plan}.badge`)}
                    </div>
                  )}
                  
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isProfessional || isEnterprise ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t(`plans.${plan}.name`)}
                    </h3>
                    <p className={`text-sm font-semibold mb-2 ${
                      isProfessional ? 'text-blue-100' : isEnterprise ? 'text-slate-300' : 'text-gray-600'
                    }`}>
                      {t(`plans.${plan}.description`)}
                    </p>
                    <p className={`text-xs leading-relaxed ${
                      isProfessional ? 'text-blue-200' : isEnterprise ? 'text-slate-400' : 'text-gray-500'
                    }`}>
                      {t(`plans.${plan}.tagline`)}
                    </p>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl font-extrabold tracking-tight ${
                        isProfessional || isEnterprise ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t(`plans.${plan}.price`)}
                      </span>
                      {plan !== 'enterprise' && (
                        <span className={`text-base font-medium ${
                          isProfessional ? 'text-blue-200' : 'text-gray-500'
                        }`}>
                          /month
                        </span>
                      )}
                    </div>
                    <p className={`text-sm font-bold mt-3 ${
                      isProfessional ? 'text-blue-100' : isEnterprise ? 'text-slate-300' : 'text-blue-600'
                    }`}>
                      {t(`plans.${plan}.credits`)}
                    </p>
                  </div>
                  
                  {/* Who This Is For */}
                  <div className={`mb-6 p-4 rounded-lg ${
                    isProfessional ? 'bg-blue-500/30' : isEnterprise ? 'bg-slate-700/50' : 'bg-blue-50'
                  }`}>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${
                      isProfessional || isEnterprise ? 'text-white/70' : 'text-blue-600'
                    }`}>
                      Who this is for
                    </p>
                    <p className={`text-sm font-medium leading-relaxed ${
                      isProfessional || isEnterprise ? 'text-white' : 'text-gray-700'
                    }`}>
                      {t(`plans.${plan}.whoThisIsFor`)}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {(t(`plans.${plan}.features`, { returnObjects: true }) as string[]).map(
                      (feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              isProfessional ? 'text-blue-200' : isEnterprise ? 'text-green-400' : 'text-green-600'
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`text-sm leading-relaxed ${
                            isProfessional || isEnterprise ? 'text-white/95' : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                  
                  {/* CTA Button */}
                  <Link
                    href={plan === 'enterprise' ? '/contact' : 'https://hotel-ai-saas-amber.vercel.app/register'}
                    className={`block w-full text-center py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
                      isProfessional
                        ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-2xl hover:scale-105'
                        : isEnterprise
                        ? 'bg-white text-slate-900 hover:bg-gray-100 shadow-lg hover:shadow-2xl'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-xl'
                    }`}
                  >
                    {plan === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Link>
                </div>
              );
            })}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">
              {t('trust.guarantee')}
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('usageExamples.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('usageExamples.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, planIdx) => (
              <div 
                key={plan} 
                className={`bg-white rounded-2xl p-8 shadow-md border-2 transition-all duration-300 hover:shadow-xl ${
                  planIdx === 1 ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    planIdx === 0 ? 'bg-blue-100' : planIdx === 1 ? 'bg-blue-600' : 'bg-slate-800'
                  }`}>
                    <svg className={`w-6 h-6 ${
                      planIdx === 0 ? 'text-blue-600' : 'text-white'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {t(`usageExamples.${plan}.title`)}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {(t(`usageExamples.${plan}.examples`, { returnObjects: true }) as string[]).map(
                    (example: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{example}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Additional Context */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('usageExamples.note')}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('faq.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('faq.subtitle')}
            </p>
          </div>
          <div className="space-y-8">
            {(t('faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>).map(
              (item, idx) => (
                <div key={idx} className="pb-8 border-b border-gray-200 last:border-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed ml-10">
                    {item.answer}
                  </p>
                </div>
              )
            )}
          </div>
          
          {/* Additional Help */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {t('faq.contactTitle')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('faq.contactSubtitle')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('faq.contactButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hotel-ai-saas-amber.vercel.app/register"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              {t('cta.button')}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-all border-2 border-white/20"
            >
              {t('cta.contact')}
            </Link>
          </div>
          <p className="mt-8 text-sm text-blue-100">
            {t('trust.guarantee')}
          </p>
        </div>
      </section>
    </div>
  );
}
