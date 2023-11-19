import React from 'react'
import '../../App.css'

function Banner() {
  return (
    <div className='bg-black/10 h-[600px] w-full rounded-lg my-5 px-5'>
     <div className='flex flex-col h-full w-full justify-center items-center'>
          <h1 className='text-3xl md:text-5xl text-center font-bold'>I Grow By Helping People In Need</h1>
          <div>
               <input
               className='h-12 w-48 md:w-96 focus:outline-none px-8 rounded-l-lg'
               type="text" placeholder='Search here...' />
               <button className='h-12 text-white px-8 bg-[#FF444A] mt-10 rounded-r-lg font-semibold'>Search</button>
          </div>
     </div>
    </div>
  )
}

export default Banner