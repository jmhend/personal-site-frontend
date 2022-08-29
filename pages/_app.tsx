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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
      </Head>
      <NavBar />
      <Component {...pageProps}/>
      <Footer />
    </>
  );
}

export default MyApp
