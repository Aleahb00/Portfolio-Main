import { Playfair_Display, Inter } from 'next/font/google'
import ClientScripts from '../components/ClientScripts'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <div id="mouse-glow"></div>
        {children}
        <ClientScripts />
      </body>
    </html>
  )
}
