import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register Your Hotel',
  description: 'Register your hotel with Hotel AI SaaS and transform your operations with our AI-powered platform.',
  openGraph: {
    title: 'Register Your Hotel | Hotel AI SaaS',
    description: 'Register your hotel with Hotel AI SaaS',
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
