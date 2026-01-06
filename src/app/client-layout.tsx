'use client';

// Isolated Marketing Layer – No Core Access
// Client-side layout wrapper with i18n provider

import { I18nProvider } from '@/components/I18nProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
