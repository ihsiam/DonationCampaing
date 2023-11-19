import React, { useState } from 'react'
import '../../App.css'

function Banner(props) {

  const [searchData, setSearcData] = useState('');

  const handleChange = (e) =>{
    const Data = e.target.value;
    setSearcData(Data);
    props.data(Data);
  }

  return (
    <div className='bg-black/10 h-[400px] md:h-[600px] w-full rounded-lg my-5 px-5'>
     <div className='flex flex-col h-full w-full justify-center items-center'>
          <h1 className='text-3xl md:text-5xl text-center font-bold'>I Grow By Helping People In Need</h1>
          <div>
               <input
               onChange={handleChange}
               className='h-12 w-40 md:w-96 focus:outline-none px-4 md:px-8 rounded-l-lg'
               value={searchData}
               type="text" placeholder='Search Category...' />
               <button type='submit' className='h-12 text-white px-8 bg-[#FF444A] mt-10 rounded-r-lg font-semibold'>Search</button>
          </div>
     </div>
    </div>
  )
}

export default Banner