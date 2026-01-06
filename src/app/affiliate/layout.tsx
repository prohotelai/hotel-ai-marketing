import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Program',
  description: 'Join the Hotel AI SaaS affiliate program and earn commissions by referring hotels to our platform.',
  openGraph: {
    title: 'Affiliate Program | Hotel AI SaaS',
    description: 'Join our affiliate program and earn commissions',
  },
};

export default function AffiliateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
