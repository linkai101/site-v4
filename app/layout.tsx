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
        <meta property="og:site_name" content="Linkai Wu" key="ogsitename"/>
      </head>
      <body className="bg-theme-background text-theme-onBackground">
        <Navbar/>
        
        {children}
      </body>
    </html>
  )
}
