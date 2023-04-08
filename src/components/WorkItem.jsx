import React from "react"

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className='flex flex-col pt-3 md:flex-row relative border-l border-stone-200'  data-aos='fade-up' data-aos-duration='1300'>
      <li className='mb-7 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white ' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#a60808] rounded-md shadow-lg shadow-[#a60808]'>
            {year}
          </span>
          <span className='text-lg font-semibold text-[#fff]'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-stone-200'>
            {duration}
          </span>
        </p>
        <p className='my-2 text-base whitespace-pre-wrap font-normal text-stone-500'>
          {details}
        </p>
      </li>
    </ol>
  )
}

export default WorkItem
