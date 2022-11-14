import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ demo, title, url, stack, repo, live }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group ease-in duration-500 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={demo}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{stack}</p>

        <div className="w-full flex justify-between">
          <Link href={url}>
            <button className="text-center mr-2 p-3 rounded-lg bg-white text-gray-700 font-medium text-sm cursor-pointer hover:scale-105 whitespace-nowrap">
              More Info
            </button>
          </Link>
          <Link href={repo}>
            <button className="text-center p-3 rounded-lg bg-white text-gray-700 font-medium text-sm cursor-pointer hover:scale-105">
              Repository
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
