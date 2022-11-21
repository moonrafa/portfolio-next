import Link from 'next/link'
import { FaDiscord, FaEnvelope, FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Homescreen = () => {
  const darkThemeEnabled = useSelector(
    state => state.preferences.darkThemeEnabled
  )
  const shadowStyle = darkThemeEnabled
    ? 'shadow-black hover:text-[#ECF0F3]'
    : 'shadow-gray-400 hover:text-[#1f2937]'
  const darkMode = darkThemeEnabled ? 'bg-[#232323]' : 'bg-[#ECF0F3]'
  const textProg = darkThemeEnabled ? 'text-white' : 'text-[#5651e5]'

  return (
    <section
      id="home"
      className="lg:h-screen h-full md:p-14 flex flex-col lg:flex-row w-full relative "
    >
      <div className="min-w-[300px] max-h-[310px] w-full h-3/5 mx-auto p-2 flex items-center lg:items-start justify-center flex-col lg:mt-28  md:mt-10 mt-20 text-center lg:text-left">
        <div className="pl-8 ">
          <p className="pt-2">Hello, I&apos;m</p>
          <h1 className="py-2 text-[33px] md:text-[40px] uppercase font-black">
            Rafaelly Rodrigues
          </h1>
          <p className="uppercase "> Software Developer</p>
        </div>
        <button
          className={`mt-6 font-medium hover:scale-105 text-xs ml-8 rounded-lg px-6 py-3 md:px-4 uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:text-white text-white shadow-md ${shadowStyle} `}
        >
          <Link href="/assets/cv.pdf" target="_blank">
            Download CV
          </Link>
        </button>
        <div className="pl-8 pt-8 md:pt-16">
          <button className={`social-button mr-3 home-social ${shadowStyle}`}>
            <Link
              href="https://linkedin.com/in/moonrafa"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </Link>
          </button>
          <button className={`social-button mr-3 home-social ${shadowStyle}`}>
            <Link
              href="https://github.com/moonrafa"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubAlt />
            </Link>
          </button>
          <button className={`social-button mr-3 home-social ${shadowStyle}`}>
            <Link
              href="https://discord.com/users/770899536318169109"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </Link>
          </button>
          <button className={`social-button mr-3 home-social ${shadowStyle}`}>
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
      <div
        className={`max-h-[184px] min-w-[310px] sm:max-h-[280px] lg:h-1/2 lg:min-w-[480px] h-4/5 w-4/5 mx-auto mb-4 lg:mx-0 md:p-6 shadow-lg rounded-lg lg:mt-48 mt-7 pt-5 lg:max-w-[500px] ${darkMode}`}
      >
        <div
          className={`px-5 pb-4 sm:text-sm text-[9px] w-full cursor-default ${textProg}	`}
        >
          <pre>
            1&nbsp;&nbsp;class <b>Person </b>&#123;
          </pre>
          <pre>2&nbsp;&nbsp;&nbsp; constructor() &#123; </pre>
          <pre>
            3&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;<b>Rafaelly</b>&quot;;
          </pre>
          <pre>
            4&nbsp;&nbsp;&nbsp;&nbsp; this.job = [&quot;
            <b>SOFTWARE DEVELOPER</b>&quot;, &quot;<b>DEV</b>&quot;];
          </pre>
          <pre>
            5&nbsp;&nbsp;&nbsp;&nbsp; this.age = new Date().getFullYear() -
            1999;
          </pre>
          <pre>6&nbsp; &#125; </pre>
          <pre>7 &#125; </pre>
        </div>
        <div className="flex items-center pb-4 px-10 md:px-0">
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#5651e5]"></div>
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#1f2937]"></div>
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#709dff]"></div>
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#C7D0FF]"></div>
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#647AF3]"></div>
        </div>
      </div>
    </section>
  )
}

export default Homescreen
