import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sandoichi</title>
        <meta name="description" content="Best Sandwiches in the UK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  )
}
