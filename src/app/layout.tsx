import './globals.css';
import type { Metadata } from 'next';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trello 2.0',
  description: 'Developed by Dawa Sherpa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
