import './globals.css';
import type { Metadata } from 'next';

import Navbar from './Navbar';

export const metadata: Metadata = {
  title: 'Linkai Wu',
  description: 'I\'m a maker, designer, and student currently based in Maryland. Welcome to my corner of the internet!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Linkai Wu" key="ogsitename"/>
      </head>
      <body className="bg-theme-background text-theme-onBackground">
        <Navbar/>
        
        {children}
      </body>
    </html>
  )
}
