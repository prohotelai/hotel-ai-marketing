'use client';

// Marketing Layer - Redirect to Core SaaS App
// This page exists only to redirect users to the actual registration

import { useEffect } from 'react';

export default function RegisterRedirect() {
  useEffect(() => {
    // Redirect to core SaaS app registration
    window.location.href = 'https://hotel-ai-saas-amber.vercel.app/register';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to registration...</p>
      </div>
    </div>
  );
}
