import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MicahKatz</title>
        <meta name="description" content="Micah Katz's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Micah Katz
        </h1>
      </main>

      <footer className={styles.footer}>
        Contact
      </footer>
    </div>
  )
}
