import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import getConfig from 'next/config'
const { publicRuntimeConfig: config } = getConfig()
import '../styles/globals.css';
console.log({ config })
export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId={config.GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  )
}
