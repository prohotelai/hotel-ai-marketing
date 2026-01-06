// Isolated Marketing Layer – No Core Access
// Root layout with i18n support and RTL handling

import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "./client-layout";

export const metadata: Metadata = {
  title: {
    default: "Hotel AI SaaS - Transform Your Hotel Operations",
    template: "%s | Hotel AI SaaS",
  },
  description: "The complete SaaS solution for modern hotels. Streamline operations, enhance guest experiences, and boost revenue with AI-powered insights.",
  keywords: ["hotel management", "SaaS", "AI", "hospitality", "booking system"],
  openGraph: {
    title: "Hotel AI SaaS - Transform Your Hotel Operations",
    description: "The complete SaaS solution for modern hotels.",
    type: "website",
    locale: "en_US",
    siteName: "Hotel AI SaaS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel AI SaaS",
    description: "The complete SaaS solution for modern hotels.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-gray-900">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
