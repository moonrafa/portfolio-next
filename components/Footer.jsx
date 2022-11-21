import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const darkThemeEnabled = useSelector(
    state => state.preferences.darkThemeEnabled
  )
  const darkMode = darkThemeEnabled ? 'bg-[#232323]' : 'bg-[#5651e5]'
  return (
    <footer
      className={`text-white lg:px-24 py-4 flex justify-between items-center px-4 ${darkMode}`}
    >
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
