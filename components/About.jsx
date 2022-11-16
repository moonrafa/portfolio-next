import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="w-full lg:h-screen lg:py-6 p-2 flex items-center py-16 bg-[#E8E8F7]"
    >
      <div>
        <h2 className="text-[#5651e5] font-black py-4 text-center lg:text-left lg:pl-20 md:pb-8">
          About me
        </h2>
        <div className="max-w-[1240px] m-auto lg:grid grid-cols-2 gap-8 flex flex-col-reverse">
          <div className="cols-span-2 ">
            <p className="py-2 text-gray-600 text-justify px-3 md:px-20 md:text-lg">
              I&apos;ve always been pragmatic, and a problem-solver, I started
              building projects and developing my code skills when I was 17
              years old. Currently, I&apos;m majoring in{' '}
              <span className="text-[#5651e5]"> Information Technology </span>{' '}
              at the{' '}
              <span className="text-[#5651e5]">
                {' '}
                Federal University of Mato Grosso do Sul (UFMS).{' '}
              </span>{' '}
              <br />
              I&apos;m very passionate about building and maintaining
              applications, I&apos;m creative, yet analytical, and I believe
              that building modern software requires a combination of both in
              order to create the best digital experience. I&apos;m naturally
              curious, quietly confident, and a lifelong learner
            </p>
          </div>
          <Image
            className=" m-auto shadow-lg rounded-full shadow-gray-400 flex items-center justify-center p-1 hover:scale-105 ease-in duration-300 lg:w-60 lg:h-60"
            width={180}
            height={180}
            src="/assets/profile-pic.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default About
