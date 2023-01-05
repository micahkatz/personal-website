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
export default function Home() {
  const [theme, setTheme] = React.useState(DARK_THEME);

  /**
   * Run the applyTheme function every time the theme state changes
  */
  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  return (
    <div className={`${styles.container} bg-primary-background flex-1`}>
      <Head>
        <title className='text-lg text-primary-text'>Micah Katz</title>
        <meta name="description" content="Micah Katz's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${styles.main} px-8`}

      // style={generateJSXMeshGradient(6)}
      // style=""
      >
        <NavBar />
        <div className={`${styles.aboutSection} align-center justify-center`}>

          <h3 className={'text-lg font-bold text-primary-text'}>
            Hi my name is
          </h3>
          <h1 className={'text-6xl font-bold text-primary-text'}>
            Micah Katz
          </h1>
          <h1 className={'text-4xl font-bold text-primary-text'}>
            I build things for the web
          </h1>
          <p className='text-md'>
            Non excepteur dolor deserunt ipsum. Irure mollit elit deserunt amet enim labore adipisicing fugiat voluptate veniam non ipsum tempor. Enim mollit duis non mollit est sint qui sunt. Mollit anim laborum sit eu tempor tempor irure elit esse in.
          </p>
          {/* <MoonIcon className='icon' /> */}
        </div>
        <ProjectsPage />


      </main>
    </div>
  )
}
