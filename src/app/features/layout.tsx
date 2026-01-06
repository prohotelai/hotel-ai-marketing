import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover the powerful features of Hotel AI SaaS - AI-powered insights, smart booking management, guest experience platform, and more.',
  openGraph: {
    title: 'Features | Hotel AI SaaS',
    description: 'Discover the powerful features of Hotel AI SaaS',
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
