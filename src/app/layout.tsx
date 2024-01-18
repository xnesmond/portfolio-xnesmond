'use client';
import { Merriweather } from 'next/font/google';
import Separator from '@/components/separator';
import Header from '@/components/header';
import './globals.css';

const merriweather = Merriweather({ subsets: ['latin'], weight: '700' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#FFF7EB]">
      <body className={merriweather.className}>
        <div className="bg-[#FFF7EB] min-h-lvh">
          <div className="mx-auto pt-5 w-3/5 flex flex-col items-center mobile-layout">
            <Separator />
            <Header />
            <Separator />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
