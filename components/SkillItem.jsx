import Image from 'next/image'
import React from 'react'

const SkillItem = ({ icon, name }) => {
  return (
    <div
      className="flex items-center justify-between lg:justify-center flex-nowrap p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300; 
    "
    >
      <Image
        className="mr-2 w-9 h-9"
        src={icon}
        alt={name}
        width={64}
        height={64}
      />
      <h3 className="text-sm md:text-base pr-4 lg:pr-0"> {name} </h3>
    </div>
  )
}

export default SkillItem
