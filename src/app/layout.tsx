import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nihwarth Prem Bhakti - AI Generated Videos',
  description: 'AI-generated videos for knowledge and entertainment. Subscribe to our channel for more!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* Meta tags */}
        <meta name="description" content="AI-generated videos for knowledge and entertainment. Subscribe to our channel for more!" />
        <meta name="keywords" content="AI, Videos, YouTube, Knowledge, Entertainment, AI-generated Content" />
        <meta name="author" content="Ganesh Kumar" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Nihwarth Prem Bhakti - AI Generated Videos" />
        <meta property="og:description" content="AI-generated videos for knowledge and entertainment. Subscribe to our channel for more!" />
        <meta property="og:image" content="/images/cover.png" />
        <meta property="og:url" content="https://your-website.com" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nihwarth Prem Bhakti - AI Generated Videos" />
        <meta name="twitter:description" content="AI-generated videos for knowledge and entertainment. Subscribe to our channel for more!" />
        <meta name="twitter:image" content="/images/logo.png" />
      </Head>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
