import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Homescreen from '../components/Homescreen'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafaelly Rodrigues | Software Engineer </title>
        <meta
          name="description"
          content="Rafaelly Rodrigues is a software engineer specialized in building accessible, functional, and user-friendly applications with clean code architectures."
        />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <main>
        <Homescreen />
        <Image
          width={35}
          height={35}
          className="w-[40%] absolute right-0 top-20 -z-50"
          src="/assets/rct.svg"
          alt="figura geometrica"
        />
        <About />
        <Skills />
      </main>
    </div>
  )
}
