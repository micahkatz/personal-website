import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GoogleAnalytics debugMode={process.env.NODE_ENV === 'development'} trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
