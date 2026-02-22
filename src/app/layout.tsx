import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Tianhao Xu',
  description: 'Personal website of Wu Wangsheng - Explore computer vision, human-computer interaction, and more.',
  keywords: ['personal website', 'computer vision', 'human-computer interaction', 'photography', 'design'],
  authors: [{ name: 'Wu Wangsheng' }],
  openGraph: {
    title: 'Tianhao Xu',
    description: 'Personal website of Wu Wangsheng',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>
            <main className="min-h-screen flex flex-col items-center justify-start px-4 py-10 sm:px-8 sm:py-14">
              {children}
            </main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
