import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Hotel AI SaaS. We are here to help with your questions about our hotel management platform.',
  openGraph: {
    title: 'Contact Us | Hotel AI SaaS',
    description: 'Get in touch with Hotel AI SaaS',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
