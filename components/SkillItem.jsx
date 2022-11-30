import Image from 'next/image'
import React from 'react'

const SkillItem = ({ icon, name }) => {
  return (
    <div
      className="flex items-center justify-between lg:justify-center flex-nowrap p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300; 
    "
    >
      <Image
        className="mr-1 w-7 h-7 md:w-9 md:h-9	"
        src={icon}
        alt={name}
        width={64}
        height={64}
      />
      <h3 className="text-sm md:text-base"> {name} </h3>
    </div>
  )
}

export default SkillItem
