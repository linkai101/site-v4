import './globals.css';

import Navbar from './Navbar';

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
