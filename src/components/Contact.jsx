import React from "react"

const Contact = () => {
  return (
    <div id='contact' className='max-w-[900px] m-auto md:pl-20 px-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#fff]'>
        Contact me
      </h1>
      <form
        action='https://getform.io/f/da699e76-08d8-4b86-8287-fb489777d6b9'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 text-gray-50'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 text-gray-50'>Phone Number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300 '
              type='text'
              name='phone'
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-gray-50'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='name'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-gray-50'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300 '
            type='text'
            name='subject'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-gray-50'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            rows='5'
            name='message'
          ></textarea>
        </div>
        <button className='bg-[#a60808] mt-4 w-full p-4 rounded-lg shadow-lg shadow-[#a60808] group'>
          <p className='text-gray-100 text-xl group-hover:scale-110 ease-in duration-200'>
            Send Message
          </p>
        </button>
      </form>
    </div>
  )
}

export default Contact
