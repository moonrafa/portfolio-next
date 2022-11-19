import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const ProjectItem = ({ demo, title, stack, repo, live }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group ease-in duration-500 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={demo}
        alt={title ? title : 'project'}
      />
      <div className="w-full p-2 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 pt-2 text-white text-center">{stack}</p>

        <div className="w-full flex justify-center items-center pb-4">
          {live && (
            <Link href={live} target="_blank" rel="noreferrer">
              <button className="whitespace-nowrap mr-4 text-center p-3 rounded-lg bg-white text-gray-700 font-medium text-sm cursor-pointer hover:scale-105 hover:font-bold">
                Live Demo
              </button>
            </Link>
          )}
          <Link href={repo} target="_blank" rel="noreferrer">
            <button className="bg-white text-gray-700 text-center p-3 rounded-full cursor-pointer hover:scale-105">
              <FaGithub fill="#5651e5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
