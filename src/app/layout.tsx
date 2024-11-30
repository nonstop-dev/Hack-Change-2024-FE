'use client';
import './globals.css';
import { MTSText, MTSWide } from './fonts/fonts';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Header from './header/header-component';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MTSText} ${MTSWide}`}>
        <ThemeProvider theme={theme}>
          <div className="container">
            <title>Поиск сотрудника</title>
            <Header></Header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
