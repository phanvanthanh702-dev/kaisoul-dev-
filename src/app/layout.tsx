import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KAISOUL DEV',
  description: 'Nền tảng phát triển và triển khai website đơn giản.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
