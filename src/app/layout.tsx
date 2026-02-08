import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/config/content';

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  viewport: { width: 'device-width', initialScale: 1 },
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
