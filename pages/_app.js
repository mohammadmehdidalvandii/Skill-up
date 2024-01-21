import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/module/Navbar/navbar'
import Footer from '@/components/module/Footer/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
