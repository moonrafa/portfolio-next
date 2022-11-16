import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#5651e5] text-white lg:px-24 py-4 flex justify-between items-center px-4">
      <Link href="#home">
        <Image src="/assets/logowhite.svg" width={40} height={40} alt="logo" />
      </Link>
      <p className="text-sm lg:font-medium">
        Made with ❤ By Rafaelly Rodrigues
      </p>
    </footer>
  )
}

export default Footer
