import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaDiscord, FaEnvelope, FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <nav className="fixed items-center justify-between px-4 lg:px-24 flex w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]">
      <div className="cursor-pointer">
        <Image src="/assets/logo.svg" width={40} height={40} alt="logo" />
      </div>
      <div>
        <ul className="hidden lg:flex text-xs">
          <Link href="#home">
            <li className="nav-link">Home</li>
          </Link>
          <Link href="#about">
            <li className="nav-link">About</li>
          </Link>
          <Link href="#skills">
            <li className="nav-link">Skills</li>
          </Link>
          <Link href="#projects">
            <li className="nav-link">Projects</li>
          </Link>
          <Link href="#contact">
            <li className="nav-link">Contact</li>
          </Link>
        </ul>
        <div className="cursor-pointer lg:hidden">
          <AiOutlineMenu
            size={35}
            fill="#5651e5"
            onClick={() => setOpenSideBar(true)}
          />
        </div>
      </div>
      {openSideBar && (
        <div
          onClick={() => setOpenSideBar(false)}
          className="fixed left-0 top-0 w-full h-screen bg-black/70 lg:hidden"
        ></div>
      )}
      {
        <div
          className={
            openSideBar
              ? 'flex flex-col justify-around fixed left-0 top-0 w-3/4 sm:w-4/5  h-screen bg-[#ecf0f3] p-10 ease-in duration-500 lg:hidden'
              : 'flex flex-col justify-around fixed left-[-100%] top-0 w-3/4 sm:w-4/5  h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 lg:hidden'
          }
        >
          <div>
            <div className="flex items-center justify-between">
              <Image src="/assets/logo.svg" width={40} height={40} alt="Logo" />
              <button className="rounded-button">
                <AiOutlineClose
                  size={22}
                  onClick={() => setOpenSideBar(false)}
                />
              </button>
            </div>
            <p className="py-6 sm:text-sm text-xs border-b border-gray-300"></p>
          </div>

          <ul
            onClick={() => setOpenSideBar(false)}
            className="py-4 flex flex-col"
          >
            <Link href="#home">
              <li className="sidebar-link">Home</li>
            </Link>
            <Link href="#about">
              <li className="sidebar-link">About</li>
            </Link>
            <Link href="#skills">
              <li className="sidebar-link">Skills</li>
            </Link>
            <Link href="#projects">
              <li className="sidebar-link">Projects</li>
            </Link>
            <Link href="#contact">
              <li className="sidebar-link">Contact</li>
            </Link>
          </ul>
          <div>
            <p className="sm:text-lg uppercase tracking-widest text-[#5651e5]">
              Connect with me
            </p>
            <div className="my-4 w-4/5 sm:w-3/4 pb-8 flex items-center justify-between">
              <button className="social-button">
                <FaLinkedin />
              </button>
              <button className="social-button">
                <FaGithubAlt />
              </button>
              <button className="social-button">
                <FaDiscord />
              </button>
              <button className="social-button">
                <FaEnvelope />
              </button>
            </div>
          </div>
        </div>
      }
    </nav>
  )
}

export default Navbar
