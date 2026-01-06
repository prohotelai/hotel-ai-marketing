'use client';

// Isolated Marketing Layer – No Core Access
// Guest access placeholder page (NO actual authentication)

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface Props {
  params: { id: string };
}

export default function GuestPage({ params }: Props) {
  const { t } = useTranslation('hotel');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">👤</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {t('guest.title')}
          </h1>
          <p className="text-gray-600 mb-8">
            {t('guest.subtitle')}
          </p>

          {/* Placeholder - No actual auth logic */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-sm text-gray-500">
              This is a placeholder page for guest access. In production, guests would be able to access hotel services and information here.
            </p>
          </div>

          <Link
            href={`/hotel/${params.id}`}
            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Hotel Page
          </Link>
        </div>
      </div>
    </div>
  );
}
