import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/module/Navbar/navbar'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />

    </>
  )
}
