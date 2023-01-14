import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from '../styles/HomePage.module.css'
import { DARK_THEME } from '../themes'
import { applyTheme } from '../themes/utils'
import AboutPage from './about'
import ExperiencePage from './experience'
import ProjectsPage from './projects'
export default function Home() {
  const [theme, setTheme] = React.useState(DARK_THEME);

  /**
   * Run the applyTheme function every time the theme state changes
  */
  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  return (
    <div className={`${styles.container} bg-primary-background flex-1 scroll-smooth`}>
      <Head>
        <title className='text-lg text-primary-text'>Micah Katz</title>
        <meta name="description" content="Micah Katz's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${styles.main} px-8 md:px-20 scroll-smooth`}

      // style={generateJSXMeshGradient(6)}
      // style=""
      >
        <NavBar />
        <AboutPage />
        <ProjectsPage />
        <ExperiencePage />
        {/* <ContactPage /> */}
        <Footer />
      </main>
    </div>
  )
}
