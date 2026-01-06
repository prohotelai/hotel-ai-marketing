'use client';

// Isolated Marketing Layer – No Core Access
// QR Code generator component

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { useTranslation } from 'react-i18next';

interface QRCodeDisplayProps {
  url: string;
  size?: number;
}

export function QRCodeDisplay({ url, size = 200 }: QRCodeDisplayProps) {
  const { t } = useTranslation('hotel');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const generateQR = async () => {
      try {
        const dataUrl = await QRCode.toDataURL(url, {
          width: size,
          margin: 2,
          color: {
            dark: '#1e40af', // Blue-800
            light: '#ffffff',
          },
        });
        setQrDataUrl(dataUrl);
        setError(false);
      } catch (err) {
        console.error('Error generating QR code:', err);
        setError(true);
      }
    };

    generateQR();
  }, [url, size]);

  if (error) {
    return (
      <div className="bg-gray-100 rounded-lg p-4 text-center text-gray-500">
        Failed to generate QR code
      </div>
    );
  }

  if (!qrDataUrl) {
    return (
      <div 
        className="bg-gray-100 rounded-lg animate-pulse"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={qrDataUrl}
          alt={t('publicPage.scanQr')}
          width={size}
          height={size}
          className="rounded-lg"
        />
      </div>
      <p className="text-sm text-gray-600 text-center max-w-xs">
        {t('publicPage.qrDescription')}
      </p>
    </div>
  );
}
