import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {


  return <>
    {/* <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`} />

    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
  
        gtag('config', '${process.env.GA_MEASUREMENT_ID}');`,
      }}
    /> */}
    <GoogleAnalytics trackPageViews />

    <Component {...pageProps} /></>
}
