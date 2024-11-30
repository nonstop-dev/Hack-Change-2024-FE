'use client';
import './globals.css';
import { MTSText, MTSWide } from './fonts/fonts';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MTSText} ${MTSWide}`}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
