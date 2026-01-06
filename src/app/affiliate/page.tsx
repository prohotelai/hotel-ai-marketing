'use client';

// Isolated Marketing Layer – No Core Access
// Affiliate information page (INFO ONLY – no registration)

import { useTranslation } from 'react-i18next';

export default function AffiliatePage() {
  const { t } = useTranslation('marketing');

  const benefits = t('affiliate.benefits.list', { returnObjects: true }) as string[];
  const steps = t('affiliate.howItWorks.steps', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('affiliate.title')}
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {t('affiliate.subtitle')}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('affiliate.benefits.title')}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Commission Structure
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Starter Plan Referral</span>
                  <span className="font-bold text-green-600">20% commission</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Professional Plan Referral</span>
                  <span className="font-bold text-green-600">25% commission</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Enterprise Plan Referral</span>
                  <span className="font-bold text-green-600">30% commission</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Commissions are recurring for the lifetime of the customer&apos;s subscription
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('affiliate.howItWorks.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Affiliate Program Coming Soon
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our affiliate program is currently in development. Sign up for our newsletter to be notified when it launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              disabled
            />
            <button
              disabled
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed"
            >
              Notify Me
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            (Registration coming soon)
          </p>
        </div>
      </section>
    </div>
  );
}
