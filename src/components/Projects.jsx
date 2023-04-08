import React from "react"
import ProjectItem from "./ProjectItem.jsx"
import img1 from "../assets/image/1.png"
import img2 from "../assets/image/2.png"
import img3 from "../assets/image/3.png"
import img4 from "../assets/image/4.png"
import img5 from "../assets/image/5.png"
import img6 from "../assets/image/6.png"
import img7 from "../assets/image/7.png"
import img8 from "../assets/image/8.png"
import img9 from "../assets/image/9.png"
import { Rocket } from "fluent-emoji"

const Projects = () => {
  return (
    <div
      id='projects'
      className='max-w-[1240px] m-auto md:pl-20 pl-4 pr-4 py-10'
    >
      <h1 className='text-4xl font-bold text-center text-[#fff]'>
        Projects
      </h1>
      <p className='flex items-center justify-center gap-3 text-gray-400 text-center py-8 text-2xl'>
        Examples of my recent projects implemented using various technologies
        <Rocket className='w-[40px]' />
      </p>
      <div className='grid sm:grid-cols-3 gap-6 mt-5'>
        <ProjectItem
          img={img1}
          title='Nexly - In Production'
          stack='React - ChakraUI - TS - Docker - PostgreSQL - AWS'
          href='http://apollomembers.netlify.app/'
        />
        <ProjectItem
          img={img2}
          title='Project Escort'
          stack='React - TS - Chakra-UI - Docker - PostgreSQL - AWS'
          href='https://bellasproject.netlify.app/'
        />
        <ProjectItem
          img={img3}
          title='Plataform Vendas Externas'
          stack='React + TS - MUI'
          href='https://www.vendasexternas.com.br/'
        />
      </div>
    </div>
  )
}

export default Projects
