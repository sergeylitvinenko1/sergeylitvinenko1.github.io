import "./globals.css";
import { montserrat } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link rel='icon' href='/public/favicon.ico'/>
      </head>

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
