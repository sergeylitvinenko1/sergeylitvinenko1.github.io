import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from '@/app/ui/fonts';
import Head from 'next/head';

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export const metadata: Metadata = {
//   icons: {
//     icon: './public/icon.ico', // /public path
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="./public/favicon.ico" />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
