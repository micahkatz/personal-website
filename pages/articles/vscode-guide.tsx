import React from 'react';
import NavBar from '../../components/NavBar';
import ReadmeParser from '../../components/ReadmeParser';
import styles from '../../styles/Article.module.css';
import { DARK_THEME } from '../../themes';
import { applyTheme } from '../../themes/utils';
import Head from 'next/head'
import Footer from '../../components/Footer'


type Props = {}

const VScodeGuide = (props: Props) => {
    const [theme, setTheme] = React.useState(DARK_THEME);

    React.useEffect(() => {
        applyTheme(theme);
    }, [theme]);
    return (

        <div className={`${styles.container} bg-primary-background flex-1 scroll-smooth`}>
            <Head>
                <title className='text-lg text-primary-text'>Micah's VS Code Guide</title>
                <meta name="description" content="Micah Katz's personal website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className={`${styles.main} px-8 md:px-20 scroll-smooth`}

            // style={generateJSXMeshGradient(6)}
            // style=""
            >
                <NavBar />
                <div className='flex flex-col items-center flex-1 w-full'>

                    <ReadmeParser
                        readmeUrl='https://raw.githubusercontent.com/micahkatz/micahs-vscode-guide/main/README.md'
                        githubRawUrl='https://github.com/micahkatz/micahs-vscode-guide/raw/main'
                        className={`${styles.article} max-w-4xl`}
                    />
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default VScodeGuide