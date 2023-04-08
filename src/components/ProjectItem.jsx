import React from "react"

const ProjectItem = ({ img, title, href, stack }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-[#a60808] rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#a60808] hover:scale-110 ease-in duration-300'>
      <img
        src={img}
        alt='/'
        className='h-full rounded-xl group-hover:opacity-10'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wide text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
        <a href={href} target='_blank'>
          <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-[#a60808] hover:text-white'>
            More Info
          </p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
