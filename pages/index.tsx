import Head from 'next/head'
import Image from 'next/image'
import { monitorEventLoopDelay } from 'perf_hooks'
import React from 'react'
import ProjectTile from '../components/ProjectTile'
import styles from '../styles/HomePage.module.css'
import { DEFAULT_THEME, DARK_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import ProjectsPage from './projects'
import MoonIcon from 'assets/moon.svg'
import { generateJSXMeshGradient } from "meshgrad";
import NavBar from '../components/NavBar'
import ExperiencePage from './experience';
import AboutPage from './about';
import ContactPage from './contact';
import Footer from '../components/Footer'
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
