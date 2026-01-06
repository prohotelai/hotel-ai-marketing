import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple and transparent pricing for Hotel AI SaaS. Choose the plan that fits your hotel needs.',
  openGraph: {
    title: 'Pricing | Hotel AI SaaS',
    description: 'Simple and transparent pricing for Hotel AI SaaS',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
