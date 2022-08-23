import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jesse Hendrickson</title>
        <meta name='description' content='Books, Cooking, Writing, Engineering, Continual Learning, and'/>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps}/>
      <Footer />
    </>
  );
}

export default MyApp
