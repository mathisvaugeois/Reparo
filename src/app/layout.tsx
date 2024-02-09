import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { Toaster } from '@/components/ui/toaster';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reparo',
  description: 'description of the page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <div style={{ marginTop: '85px' }}>
          {children}
        </div>
      <Footer />
      <Toaster></Toaster>
      </body>
    </html>
  )
}
