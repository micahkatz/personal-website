import React from 'react'
import styles from '../styles/About.module.css'
import { FiGithub, FiInstagram } from 'react-icons/fi'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { ImStackoverflow, ImNpm } from 'react-icons/im'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import { DARK_THEME } from '../themes'
import { applyTheme } from '../themes/utils'
type Props = {}

const resume = (props: Props) => {
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
                <title className='text-lg text-primary-text'>Micah Katz Resume</title>
                <meta name="description" content="Micah Katz's Resume" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <iframe src='/micah-katz-resume-website.pdf' className='h-[calc(100vh-115px)] w-screen' />
        </div>
    )
}

export default resume