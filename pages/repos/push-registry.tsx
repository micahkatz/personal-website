import React from 'react';
import NavBar from '../../components/NavBar';
import ReadmeParser from '../../components/ReadmeParser';
import styles from '../../styles/Article.module.css';
import { DARK_THEME } from '../../themes';
import { applyTheme } from '../../themes/utils';
import Head from 'next/head'
import Footer from '../../components/Footer'


type Props = {}

const PushRegistryRepo = (props: Props) => {
    const [theme, setTheme] = React.useState(DARK_THEME);

    React.useEffect(() => {
        applyTheme(theme);
    }, [theme]);
    return (

        <div className={`${styles.container} bg-primary-background flex-1 scroll-smooth`}>
            <Head>
                <title className='text-lg text-primary-text'>Repos - Push Registry</title>
                <meta name="description" content="A repo for pushing to a container registry" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />
            <main
                className={`${styles.main} px-8 md:px-20 scroll-smooth`}
            >
                <div className='flex flex-col items-center flex-1 w-full'>
                    <ReadmeParser
                        readmeUrl='https://raw.githubusercontent.com/micahkatz/push-registry/main/README.md'
                        className={`${styles.article} max-w-4xl animate-slide-up pt-8`}
                    />
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default PushRegistryRepo