import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import '../styles/globals.css';
import { ThemeProvider } from '../components/theme-provider';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >

        <GoogleAnalytics debugMode={process.env.NODE_ENV === 'development'} trackPageViews />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
