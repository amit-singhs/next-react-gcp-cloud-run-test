import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Switzerland - Discover Alpine Paradise',
  description: 'Experience the breathtaking beauty of Switzerland with its majestic mountains, pristine lakes, and charming cities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
