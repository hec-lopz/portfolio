import Footer from './components/Footer'
import Header from './components/Header'
import './styles/normalize.css'
import './styles/globals.css'
import { Montserrat, Raleway } from 'next/font/google'
import Script from 'next/script'

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
      <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      <body>
        <Header />
        {children}
        <Footer />
        <Script id='netlify-login'>
          {`if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }`}
        </Script>
      </body>
    </html>
  )
}
