'use client';
import Separator from '@/components/separator';
import Header from '@/components/header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#FFF7EB]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Special+Elite&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
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
