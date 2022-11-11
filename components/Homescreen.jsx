import { FaDiscord, FaEnvelope, FaGithubAlt, FaLinkedin } from 'react-icons/fa'

const Homescreen = () => {
  return (
    <section className="h-screen md:p-14 flex flex-col lg:flex-row w-full relative ">
      <div className="min-w-[300px] max-h-[310px] w-full h-3/5 mx-auto p-2 flex items-center lg:items-start justify-center flex-col lg:mt-28  md:mt-10 mt-20 text-center lg:text-left">
        <div className="pl-8 ">
          <p className="pt-2">Hello, I'm</p>
          <h1 className="py-2 text-[33px] md:text-[40px] uppercase font-black">
            Rafaelly Rodrigues
          </h1>
          <p className="uppercase "> Software Engineer</p>
        </div>
        <button className="mt-6 font-medium hover:scale-105 text-xs ml-8 rounded-lg px-6 py-3 md:px-4 uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-md shadow-gray-300">
          Download CV
        </button>
        <div className="pl-8 pt-8 md:pt-16">
          <button className="social-button mr-3 home-social">
            <FaLinkedin />
          </button>
          <button className="social-button mr-3 home-social">
            <FaGithubAlt />
          </button>
          <button className="social-button mr-3 home-social">
            <FaDiscord />
          </button>
          <button className="social-button home-social">
            <FaEnvelope />
          </button>
        </div>
      </div>
      <div className=" max-h-[180px] min-w-[310px] sm:max-h-[280px] lg:h-1/2 lg:min-w-[480px] h-4/5 w-4/5 mx-auto lg:mx-0 md:p-6 bg-[#ECF0F3] shadow-lg rounded-lg lg:mt-48 mt-7 pt-5 lg:max-w-[500px]">
        <div class="text-[#5651e5] px-5 pb-4 sm:text-sm text-[9px] w-full">
          <pre>
            1&nbsp;&nbsp;class <b>Person </b>&#123;
          </pre>
          <pre>2&nbsp;&nbsp;&nbsp; constructor() &#123; </pre>
          <pre>
            3&nbsp;&nbsp;&nbsp;&nbsp; this.name = "<b>Rafaelly</b>";
          </pre>
          <pre>
            4&nbsp;&nbsp;&nbsp;&nbsp; this.job = ["
            <b>SOFTWARE ENGINEER</b>", "<b>DEV</b>"];
          </pre>
          <pre>
            5&nbsp;&nbsp;&nbsp;&nbsp; this.age = new Date().getFullYear() -
            1999;
          </pre>
          <pre>6&nbsp; &#125; </pre>
          <pre>7 &#125; </pre>
        </div>
        <div className="flex items-center px-10 md:px-0">
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#5651e5]"></div>
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#1f2937]"></div>
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#709dff]"></div>
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#d7deed]"></div>
          <div className=" w-10 h-10 m-0.5 rounded-md bg bg-[#647AF3]"></div>
        </div>
      </div>
    </section>
  )
}

export default Homescreen
