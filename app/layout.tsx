import Footer from './components/Footer'
import Header from './components/Header'
import './styles/normalize.css'
import './styles/globals.css'
import { Montserrat, Raleway } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${montserrat.variable} ${raleway.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
