import React from 'react'
import ProjectItem from './ProjectItem'
import netflix from '../public/assets/projects/netflix.png'
import gmail from '../public/assets/projects/gmail-clone.png'

const Projects = () => {
  const projects = [
    {
      demo: netflix,
      url: '/netflix',
      title: 'Netflix Clone',
      stack: 'react, stripe, redux, axios, firebase',
      repo: 'https://github.com/moonrafa/netflix-clone',
      live: 'https://netflix-clone-moonrafa.web.app'
    },
    {
      demo: gmail,
      url: '/gmail',
      title: 'Gmail Clone',
      stack: 'react, material ui, redux, firebase',
      repo: 'https://github.com/moonrafa/gmail-clone',
      live: 'https://rafamail-6b7c7.web.app'
    }
  ]
  return (
    <section id="projects" className="bg-[#E8E8F7] pt-10">
      <h2 className="text-[#5651e5] font-black py-4 text-center lg:text-left lg:pl-20">
        My projects
      </h2>
      <div className="grid py-10 md:grid-cols-2 gap-8 px-5">
        {projects.map(project => (
          <ProjectItem
            key={project.url}
            title={project.title}
            url={project.url}
            demo={project.demo}
            stack={project.stack}
            repo={project.repo}
            live={project.live}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
