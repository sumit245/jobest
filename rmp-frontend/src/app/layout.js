import Navbar from '@/component/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import HomepageContent from '@/component/hero/HomepageContent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>ReferMyPal</title>
        <meta name="description" content="A React.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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