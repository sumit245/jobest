import Navbar from '@/component/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

import HomepageContent from '@/component/hero/HomepageContent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ReferMyPal',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body className={inter.className}>
        <Navbar />
        <HomepageContent />
        {children}
      </body>
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
      <script async src='js/theme.js'></script>
      <script async src='js/bootstrap-navbar.js'></script>
    </html>
  )
}
