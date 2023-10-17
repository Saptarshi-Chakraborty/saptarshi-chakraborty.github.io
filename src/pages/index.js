import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saptarshi Chakraborty | Web Developer</title>
        <meta name="description" content="Portfolio website of Saptarshi Chakraborty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >

        <nav className={styles.navbar}>
          <ul>
            <li><a href="/projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>

        <h2>Hello World !</h2>
      </main>

    </>
  )
}
