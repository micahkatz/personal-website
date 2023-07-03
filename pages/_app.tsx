import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import getConfig from 'next/config'
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()
import '../styles/globals.css';
console.log({ serverRuntimeConfig, publicRuntimeConfig })
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId={serverRuntimeConfig.GA_MEASUREMENT_ID || publicRuntimeConfig.GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  )
}
