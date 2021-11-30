import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>D'Gust App</title>
        <meta name="description" content="Inovação financeira para restaurantes. Gerir o seu restaurante nunca foi tão acessível." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {`Bem Vindo Ao D'Gust APP`}
        </h1>
        <p className={styles.description}>Inovação financeira para restaurantes. Gerir o seu restaurante nunca foi tão acessível.</p>
      </main>
    </div>
  )
}
