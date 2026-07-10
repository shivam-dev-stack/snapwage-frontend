import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SnapWage | Smart Industrial Payroll',
  description: 'Automated salary calculations, overtime math, and shifts powered by biometric IoT syncing.',
  manifest: '/manifest.json', // Automatically registers the PWA manifest
};


export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-slate-900 selection:bg-indigo-500 selection:text-white">
      <body className={`${inter.className} h-full antialiased text-slate-100`}>
        {children}
      </body>
    </html>
  );
}