// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Navbar from './navbar'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Reparo',
//   description: 'Site d\'annonces pour réparer vos objets',
// }
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="fr">
//       <head>
//         <meta charSet="utf-8"/>
//         <meta name="viewport" content="width=device-width, initial-scale=1"/>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
//       </head>
//       <Header />
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   )
// }

export default function RootLayout({ children, }: {children : React.ReactNode}) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  )
}
