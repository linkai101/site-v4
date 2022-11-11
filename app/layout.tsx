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
        <title>Linkai Wu</title>
        <meta name="description" content="by @linkai101 on github" />
      </head>
      <body className="bg-theme-background text-theme-onBackground">
        <Navbar/>
        
        {children}
      </body>
    </html>
  )
}
