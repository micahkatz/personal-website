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


      <NavBar />
      <main
        className={`${styles.main} px-8 md:px-20 scroll-smooth flex items-center`}

      // style={generateJSXMeshGradient(6)}
      // style=""
      >
        <div className="max-w-6xl">

        <AboutPage />
        <ProjectsPage />
        <ExperiencePage />
        {/* <ContactPage /> */}
        <Footer />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- Calendly badge widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/micahjkatz/30min', text: 'Schedule time with me', color: '#8783d1', textColor: '#E6E6EF', branding: true }); }</script>
<!-- Calendly badge widget end -->`}}
        />
      </main>
    </div>
  )
}
