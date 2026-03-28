import type { Metadata, Viewport } from 'next';
import './globals.css';
import { en } from '@/locales/en';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  icons: { icon: '/logo.png', apple: '/logo.png' },
  openGraph: {
    title: en.meta.title,
    description: en.meta.description,
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
