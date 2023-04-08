import React from "react"
import photo from "../assets/image/photo.jpg"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/all"
import { FaceWithMonocle } from "fluent-emoji"

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src={photo}
        alt='/'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/90'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1
            className='sm:text-6xl text-5xl font-bold text-red-600'
            data-aos='fade-down'
            data-aos-duration='1300'
          >
            I am Gustavo Costa
          </h1>
          <h2
            className='flex items-center sm:text-4xl text-2xl pt-4 text-gray-50'
            data-aos='fade-up'
            data-aos-duration='1300'
          >
            <TypeAnimation
              sequence={[
                "Full front-end developer",
                1500,
                "Fullstack Developer",
                1500,
              ]}
              wrapper='div'
              cursor={false}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
            <FaceWithMonocle className='w-[55px] pl-3' />
          </h2>
          <div
            className='flex justify-between pt-6 max-w-[200px] w-full'
            data-aos='fade-up'
            data-aos-duration='1300'
          >
            <a href='https://api.whatsapp.com/send?phone=351932136888' target='_blank'>
              <FaWhatsapp className='cursor-pointer text-gray-50' size={30} />
            </a>
            <a href='https://github.com/gustavocw' target='_blank'>
              <FaGithub className='cursor-pointer text-gray-50' size={30} />
            </a>
            <a
              href='https://www.linkedin.com/in/gustavocw/'
              target='_blank'
            >
              <FaLinkedin className='cursor-pointer text-gray-50' size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
