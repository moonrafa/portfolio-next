import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaDiscord, FaEnvelope, FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TOGGLE_DARKTHEME } from '../test/actions'

const Navbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  const [shadow, setShadow] = useState(false)
  const darkThemeEnabled = useSelector(
    state => state.preferences.darkThemeEnabled
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])
  const shadowCSS = shadow
    ? 'fixed items-center justify-between px-4 lg:px-24 flex w-full h-20 shadow-xl z-[100]'
    : 'fixed items-center justify-between px-4 lg:px-24 flex w-full h-20 z-[100]'
  const darkTheme = darkThemeEnabled ? 'bg-[#191919]' : 'bg-[#ecf0f3]'
  const sidebarStyle = openSideBar
    ? 'flex flex-col justify-around fixed left-0 top-0 w-3/4 sm:w-4/5  h-screen p-10 ease-in duration-500 lg:hidden'
    : 'flex flex-col justify-around fixed left-[-100%] top-0 w-3/4 sm:w-4/5  h-screen p-10 ease-in-out duration-500 lg:hidden'
  const shadowColor = darkThemeEnabled ? 'shadow-black' : 'shadow-gray-400'
  return (
    <nav className={`${shadowCSS} ${darkTheme}`}>
      <div className="cursor-pointer">
        <Image src="/assets/logo.svg" width={40} height={40} alt="logo" />
      </div>
      <div className="hidden lg:flex items-center">
        <ul className="hidden lg:flex text-xs pr-5">
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
        <div className="hidden lg:inline">
          <label className="darkMode">
            <input
              type="checkbox"
              onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
            />
            <span className="slideButton round"></span>
          </label>
        </div>
      </div>
      <div className="cursor-pointer lg:hidden">
        <AiOutlineMenu
          size={35}
          fill="#5651e5"
          onClick={() => setOpenSideBar(true)}
        />
      </div>
      {openSideBar && (
        <div
          onClick={() => setOpenSideBar(false)}
          className="fixed left-0 top-0 w-full h-screen bg-black/70 lg:hidden"
        ></div>
      )}
      {
        <div className={`${sidebarStyle} ${darkTheme}`}>
          <div>
            <div className="flex items-center justify-between">
              <Image src="/assets/logo.svg" width={40} height={40} alt="Logo" />
              <button className={`rounded-button ${shadowColor}`}>
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
              <button className={`social-button ${shadowColor}`}>
                <Link
                  href="https://linkedin.com/in/moonrafa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </Link>
              </button>
              <button className={`social-button ${shadowColor}`}>
                <Link
                  href="https://github.com/moonrafa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubAlt />
                </Link>
              </button>
              <button className={`social-button ${shadowColor}`}>
                <Link
                  href="https://discord.com/users/770899536318169109"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord />
                </Link>
              </button>
              <button className={`social-button ${shadowColor}`}>
                <Link
                  href="mailto:rrafasrodrigues@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelope />
                </Link>
              </button>
            </div>
          </div>
          <div className="mx-auto">
            <label className="darkMode">
              <input
                type="checkbox"
                onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
              />
              <span className="slideButton round"></span>
            </label>
          </div>
        </div>
      }
    </nav>
  )
}

export default Navbar
