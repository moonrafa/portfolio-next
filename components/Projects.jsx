import React from 'react'
import ProjectItem from './ProjectItem'
import netflix from '../public/assets/projects/netflix.png'
import gmail from '../public/assets/projects/gmail-clone.png'
import dazzcord from '../public/assets/projects/dazzcord.png'
import webscraping from '../public/assets/projects/webscraping.svg'
import linkedin from '../public/assets/projects/in.png'
import hulu from '../public/assets/projects/Huludesktop.png'
import easybank from '../public/assets/projects/easybank.png'
import business from '../public/assets/projects/beautysalon-.png'
import bookmark from '../public/assets/projects/bookmark.png'
import creditCard from '../public/assets/projects/credit-card.jpg'
import dataTransform from '../public/assets/projects/Data-Transform.png'
import clubhouse from '../public/assets/projects/clubhouse.png'
import iosSummary from '../public/assets/projects/ios.png'
import firegram from '../public/assets/projects/moon.png'
import nfacts from '../public/assets/projects/nfacts.png'
import fbUI from '../public/assets/projects/fbUI.png'
import skystore from '../public/assets/projects/Sky-Store.png'
import pdf from '../public/assets/projects/pdf.png'
import ecc from '../public/assets/projects/ecc.jpeg'
import pass from '../public/assets/projects/pass.png'
import qr from '../public/assets/projects/qrdesktop.png'
import noteit from '../public/assets/projects/noteit.png'
import satellist from '../public/assets/projects/listDesktop.png'
import quiz from '../public/assets/projects/Quiz-Desktop.png'
import last from '../public/assets/projects/home.png'
import imageSearcher from '../public/assets/projects/imageSearcher.png'
import ig from '../public/assets/projects/ig.png'
import et from '../public/assets/projects/et.png'

const Projects = () => {
  const projects = [
    {
      demo: netflix,
      title: 'Netflix Clone',
      stack: 'react, stripe, redux, axios, firebase',
      repo: 'https://github.com/moonrafa/netflix-clone',
      live: 'https://netflix-clone-moonrafa.web.app'
    },
    {
      demo: gmail,
      title: 'Gmail Clone',
      stack: 'react, material ui, redux, firebase',
      repo: 'https://github.com/moonrafa/gmail-clone',
      live: 'https://rafamail-6b7c7.web.app'
    },
    {
      demo: dazzcord,
      title: 'Dazzcord: Realtime Chat',
      stack: 'socket.io, node.js, express',
      repo: 'https://github.com/moonrafa/dazzcord'
    },
    {
      demo: webscraping,
      title: 'Webscraping',
      stack: 'python, beautifulsoup, lxml',
      repo: 'https://github.com/moonrafa/webscraping-py'
    },
    {
      demo: hulu,
      title: 'Hulu Clone',
      stack: 'next.js, tailwindcss',
      repo: 'https://github.com/moonrafa/hulu-clone',
      live: 'https://hulu-clone-moonrafa.vercel.app/'
    },
    {
      demo: linkedin,
      title: 'LinkedIn Clone',
      stack: 'react, redux, firebase, material ui',
      repo: 'https://github.com/moonrafa/linkedin-clone',
      live: 'https://linkedin-clone-91b73.web.app/'
    },
    {
      demo: dataTransform,
      title: 'Data Transformation',
      stack: 'python, pandas, tabula-py',
      repo: 'https://github.com/moonrafa/data-transformation-py'
    },
    {
      demo: satellist,
      title: 'Satellist: To-do App',
      stack: 'meteor.js, mongoDB, react, css',
      repo: 'https://github.com/moonrafa/satellist'
    },
    {
      demo: skystore,
      title: 'Sky Store',
      stack: 'javascript, bootstrap',
      repo: 'https://github.com/moonrafa/sky-store',
      live: 'https://moonrafa.github.io/sky-store/'
    },
    {
      demo: pdf,
      title: 'PDF Generator',
      stack: 'node.js, puppeteer, ejs, tailwindcss',
      repo: 'https://github.com/moonrafa/pdf-generator'
    },
    {
      demo: noteit,
      title: 'Note It: Share Notes',
      stack: '    meteor.js, mongoDB, blaze, materializecss      ',
      repo: 'https://github.com/moonrafa/note-it'
    },
    {
      demo: easybank,
      title: 'Easybank Page',
      stack: 'javascript, scss, html',
      repo: 'https://github.com/moonrafa/easybank',
      live: 'https://moonrafa.github.io/easybank/'
    },
    {
      demo: ecc,
      title: 'Astro - Ecc vs Porb',
      stack: 'python, pandas, numpy, matplotlib',
      repo: 'https://github.com/moonrafa/ecc-vs-porb/'
    },
    {
      demo: bookmark,
      title: 'Bookmark Extension Page',
      stack: 'tailwindcss, html, javascript',
      repo: 'https://github.com/moonrafa/extension-landing-page',
      live: 'https://moonrafa.github.io/extension-landing-page/'
    },
    {
      demo: creditCard,
      title: 'Credit Card Auth',
      stack: 'node.js, visa token services',
      repo: 'https://github.com/moonrafa/credit-card-authentication'
    },
    {
      demo: firegram,
      title: 'Firegram: Share Photos',
      stack: 'react, firebase, framer motion',
      repo: 'https://github.com/moonrafa/firegram-react'
    },
    {
      demo: pass,
      title: 'Password Generator',
      stack: 'node.js, chalk, commander, clipboardy',
      repo: 'https://github.com/moonrafa/password-generator'
    },
    {
      demo: qr,
      title: 'QR Code Generator',
      stack: 'javascript, qrcode.js, tailwindcss',
      repo: 'https://github.com/moonrafa/qr-code-generator',
      live: 'https://moonrafa.github.io/qr-code-generator/'
    },
    {
      demo: imageSearcher,
      title: 'Image Searcher',
      stack: 'react, tailwindcss',
      repo: 'https://github.com/moonrafa/react-image-searcher'
    },
    {
      demo: quiz,
      title: 'Computer Science Quiz',
      stack: 'react, typescript, styled components',
      repo: 'https://github.com/moonrafa/quiz',
      live: 'moonrafa.github.io/quiz'
    },
    {
      demo: business,
      title: 'Business Landing Page',
      stack: 'javascript, css',
      repo: 'https://github.com/moonrafa/business-landing-page',
      live: 'https://moonrafa.github.io/business-landing-page/'
    },
    {
      demo: fbUI,
      title: 'Facebook Login UI',
      stack: 'tailwindcss, html',
      repo: 'https://github.com/moonrafa/facebook-login-interface',
      live: 'https://moonrafa.github.io/facebook-login-interface/'
    },
    {
      demo: last,
      title: 'Last.fm Clone',
      stack: 'react, material ui, css',
      repo: 'https://github.com/moonrafa/lastfm-clone'
    },
    {
      demo: nfacts,
      title: 'Number Facs',
      stack: 'javascript, bootstrap',
      repo: 'https://github.com/moonrafa/number-facts'
    },
    {
      demo: iosSummary,
      titlte: 'iOS Summary Screen UI',
      stack: 'tailwindcss, html',
      repo: 'https://github.com/moonrafa/ios-summary-screen'
    },
    {
      demo: ig,
      titlte: 'Instagram Home UI',
      stack: 'tailwindcss, html',
      repo: 'https://github.com/moonrafa/simple-ig-homepage'
    },
    {
      demo: et,
      titlte: 'Expense Tracker',
      stack: 'react, css',
      repo: 'https://github.com/moonrafa/expense-tracker'
    }
  ]
  return (
    <section id="projects" className="bg-[#E8E8F7] pt-20">
      <h2 className="text-[#5651e5] font-black py-4 text-center lg:text-left lg:pl-20">
        My projects
      </h2>
      <div className="grid py-10 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {projects.map(project => (
          <ProjectItem
            key={project.repo}
            title={project.title}
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
