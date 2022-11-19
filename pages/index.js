import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Homescreen from '../components/Homescreen'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import emailjs from '@emailjs/browser'
import Footer from '../components/Footer'

export default function Home() {
  ;(function () {
    emailjs.init('5hixrZRlAnZhTf7QG')
  })()

  return (
    <div>
      <Head>
        <title>Rafaelly Rodrigues | Software Developer </title>
        <meta
          name="description"
          content="Rafaelly Rodrigues is a software developer specialized in building accessible, functional, and user-friendly applications with clean code architectures."
        />
        <meta
          name="keywords"
          content="software developer, software engineer, front-end, back-end, mobile"
        />

        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar />

      <main>
        <Homescreen />
        <Image
          priority
          width={35}
          height={35}
          className="w-[40%] absolute right-0 top-20 -z-50"
          src="/assets/rct.svg"
          alt="figura geometrica"
        />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
