import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingChat from '@/components/chat/FloatingChat'
import { CartProvider } from '@/context/CartContext'
import { Toaster } from '@/components/ui/Toaster'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'QYOUR | Clinically Proven. 100% Natural.',
    template: '%s | QYOUR',
  },
  description:
    'Clinically proven to reduce HbA1c by 0.8–1.2% in newly diagnosed diabetics. 100% natural supplement. Doctor-approved. Starting ₹699/month.',
  keywords: [
    'diabetes supplement India',
    'natural diabetes management',
    'HbA1c reduction',
    'Type 2 diabetes',
    'QYOUR',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'QYOUR',
  },
}

export const viewport: Viewport = {
  themeColor: '#C4A882',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingChat />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
