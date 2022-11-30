import SkillItem from './SkillItem'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper'

const Skills = () => {
  return (
    <section id="skills" className="w-full mx-auto h-screen pt-16 px-5">
      <h2 className="text-[#5651e5] font-black py-4 text-center lg:text-left lg:pl-20 pt-10 ">
        Skills
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="pb-8 mb-6 mx-auto h-full w-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 lg:px-20 lg:pt-20">
            <SkillItem name="Python" icon="/assets/skills/python.svg" />
            <SkillItem name="MySQL" icon="/assets/skills/mysql.svg" />
            <SkillItem name="JavaScript" icon="/assets/skills/js.svg" />
            <SkillItem name="Next.js" icon="/assets/skills/next.svg" />
            <SkillItem name="Node.js" icon="/assets/skills/node.svg" />
            <SkillItem name="React" icon="/assets/skills/react.svg" />
            <SkillItem name="TypeScript" icon="/assets/skills/typescript.svg" />
            <SkillItem name="Git" icon="/assets/skills/git.svg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" pb-8 mb-6 mx-auto h-full w-full grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 lg:px-20 lg:pt-20">
            <SkillItem name="Redux" icon="/assets/skills/redux.svg" />
            <SkillItem name="Express" icon="/assets/skills/express.svg" />
            <SkillItem name="PostgreSQL" icon="/assets/skills/postgre.svg" />
            <SkillItem name="MongoDB" icon="/assets/skills/mongodb.svg" />
            <SkillItem name="Firebase" icon="/assets/skills/firebase.svg" />
            <SkillItem name="HTML" icon="/assets/skills/html.svg" />
            <SkillItem name="CSS" icon="/assets/skills/css.svg" />
            <SkillItem name="Tailwindcss" icon="/assets/skills/tailwind.svg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Skills
