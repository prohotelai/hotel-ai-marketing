'use client';

// Isolated Marketing Layer – No Core Access
// Features page - detailed feature list

import { useTranslation } from 'react-i18next';

const features = [
  { key: 'ai', icon: '🤖', color: 'bg-purple-100 text-purple-600' },
  { key: 'booking', icon: '📅', color: 'bg-blue-100 text-blue-600' },
  { key: 'guest', icon: '🎯', color: 'bg-green-100 text-green-600' },
  { key: 'analytics', icon: '📊', color: 'bg-yellow-100 text-yellow-600' },
  { key: 'staff', icon: '👥', color: 'bg-red-100 text-red-600' },
  { key: 'integration', icon: '🔗', color: 'bg-indigo-100 text-indigo-600' },
];

export default function FeaturesPage() {
  const { t } = useTranslation('marketing');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.key}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center text-3xl mb-6`}>
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t(`features.list.${feature.key}.title`)}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t(`features.list.${feature.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Hotel AI SaaS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-600">Get started in minutes, not days. Our intuitive setup process gets you running fast.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
              <p className="text-gray-600">Save up to 40% compared to traditional hotel management solutions.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Ready</h3>
              <p className="text-gray-600">Multi-language support and localization for hotels worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
