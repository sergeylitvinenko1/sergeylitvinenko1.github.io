import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from '@/app/ui/fonts';
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Head>
      <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico"/>
      </Head>

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
