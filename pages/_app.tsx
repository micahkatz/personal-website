import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import getConfig from 'next/config'
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GoogleAnalytics debugMode={process.env.NODE_ENV === 'development'} trackPageViews gaMeasurementId={serverRuntimeConfig.GA_MEASUREMENT_ID || publicRuntimeConfig.GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  )
}
