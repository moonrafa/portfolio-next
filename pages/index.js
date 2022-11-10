import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

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
      </Head>
      <Navbar />

      <main className=""></main>

      <footer className=""></footer>
    </div>
  )
}
