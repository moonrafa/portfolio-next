import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#5651e5] text-white lg:px-24 py-4 flex justify-between items-center px-4">
      <Image src="/assets/logowhite.svg" width={40} height={40} alt="logo" />
      <p className="text-sm lg:font-medium">
        Made with ❤ By Rafaelly Rodrigues
      </p>
    </footer>
  )
}

export default Footer
