import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { GeistMono } from 'geist/font/mono';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  Hubot_Sans,
} from 'next/font/google';

import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const hubot = Hubot_Sans({
  subsets: ['latin'],
  variable: '--font-hubot',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${bricolage.variable} ${hubot.variable} ${hanken.variable} ${GeistMono.variable}`}
      >
        <head />
        <body className={`font-sans font-medium antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <Navbar />
              {children}
              {/* <OnekoCat /> */}
              {/* <Quote /> */}
              <Footer />
              {/* <ChatBubble /> */}
              {/* <UmamiAnalytics /> */}
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
