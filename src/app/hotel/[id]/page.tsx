'use client';

// Isolated Marketing Layer – No Core Access
// Hotel public page - displays safe public hotel info with QR code

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/components/I18nProvider';
import { QRCodeDisplay } from '@/components/QRCodeDisplay';

// Mock hotel data - in production, this would come from a public API
// GET /api/public/hotels/[id] (safe, read-only endpoint from Core SaaS)
interface HotelPublicData {
  id: string;
  name: string;
  logo?: string;
  welcomeMessage: string;
}

const mockHotels: Record<string, HotelPublicData> = {
  'demo-hotel-1': {
    id: 'demo-hotel-1',
    name: 'Grand Palace Hotel',
    logo: undefined, // Placeholder - would come from Vercel Blob
    welcomeMessage: 'Welcome to our luxurious hotel experience!',
  },
  'demo-hotel-2': {
    id: 'demo-hotel-2',
    name: 'Seaside Resort & Spa',
    welcomeMessage: 'Experience paradise by the ocean!',
  },
  'demo-hotel-3': {
    id: 'demo-hotel-3',
    name: 'Mountain View Lodge',
    welcomeMessage: 'Your mountain retreat awaits!',
  },
};

async function fetchHotelData(id: string): Promise<HotelPublicData | null> {
  // In production, this would call the Core SaaS public API:
  // const response = await fetch(`${process.env.NEXT_PUBLIC_CORE_API_URL}/hotels/${id}`);
  // if (!response.ok) return null;
  // return response.json();

  // For now, use mock data
  return mockHotels[id] || null;
}

interface Props {
  params: { id: string };
}

export default function HotelPublicPage({ params }: Props) {
  const { t } = useTranslation('hotel');
  useLanguage(); // Used for RTL context availability
  const [hotel, setHotel] = useState<HotelPublicData | null>(null);
  const [loading, setLoading] = useState(true);
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    const loadHotel = async () => {
      const data = await fetchHotelData(params.id);
      setHotel(data);
      setLoading(false);
      
      // Generate QR URL for this hotel page
      if (typeof window !== 'undefined') {
        setQrUrl(`${window.location.origin}/hotel/${params.id}`);
      }

      // Track QR scan (if accessed with qr=1 param)
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('qr') === '1') {
          // Track QR scan event
          fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'qrScan',
              publicHotelId: params.id,
            }),
          }).catch(() => {}); // Silent fail
        }
      }
    };

    loadHotel();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">🏨</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {t('notFound.title')}
          </h1>
          <p className="text-gray-600 mb-6">
            {t('notFound.description')}
          </p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hotel Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white text-center">
            {/* Logo placeholder */}
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              {hotel.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={hotel.logo} alt={hotel.name} className="w-20 h-20 rounded-full object-cover" />
              ) : (
                <span className="text-4xl">🏨</span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              {t('publicPage.welcome')}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {hotel.name}
            </h2>
          </div>

          <div className="p-8">
            <p className="text-gray-600 text-lg text-center mb-8">
              {hotel.welcomeMessage}
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href={`/hotel/${params.id}/guest`}
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                <span className="text-2xl">👤</span>
                {t('publicPage.guestAccess')}
              </Link>
              <Link
                href={`/hotel/${params.id}/staff`}
                className="flex items-center justify-center gap-3 bg-gray-100 text-gray-900 px-6 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                <span className="text-2xl">👥</span>
                {t('publicPage.staffLogin')}
              </Link>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
            {t('publicPage.scanQr')}
          </h3>
          <div className="flex justify-center">
            {qrUrl && <QRCodeDisplay url={`${qrUrl}?qr=1`} size={200} />}
          </div>
        </div>
      </div>
    </div>
  );
}
