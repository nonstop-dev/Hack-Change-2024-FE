import type { Metadata } from 'next';
import './globals.css';
import { MTSText, MTSWide } from './fonts/fonts';

export const metadata: Metadata = {
  title: 'Поиск сотрудника',
  description: 'Приложение для поиска сотрудника',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MTSText} ${MTSWide}`}>{children}</body>
    </html>
  );
}
