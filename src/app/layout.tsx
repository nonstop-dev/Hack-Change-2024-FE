import type { Metadata } from 'next';
import './globals.css';
import { mtsText, mtsWide } from './fonts/fonts';

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
      <body className={`${mtsText} ${mtsWide}`}>{children}</body>
    </html>
  );
}
