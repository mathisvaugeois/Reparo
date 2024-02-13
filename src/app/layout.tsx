import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Provider from '@/components/provider/provider';
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
<Provider>
        <Header />
        <div style={{ marginTop: '85px' , marginBottom: '200px'}}>
          {children}
        </div>
      <Footer />
      <Toaster></Toaster>
</Provider>
      </body>
    </html>
  )
}
