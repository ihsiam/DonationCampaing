import React from 'react'
import { useLocation } from 'react-router-dom'

function DonationDetails(props) {


const location = useLocation();

const handleData = (data) =>{
     props.sendData(data);
}

const {id, pic, title, category, ctBg, cdBg, tbBg, des, price } = location.state

  return (
     <div className='my-5'>
          <div className='relative'>
               <img className=' h-80 md:h-[450px] lg:h-[700px] w-full rounded-lg' src={pic} alt={title}/>
               <div className='absolute rounded-b-lg bottom-0 h-20 md:h-24 lg:h-32 w-full bg-[#0b0b0b80] flex items-center pl-10'>
               <button
               onClick={() =>handleData(location.state)}
               className='px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4 rounded text-lg md:text-xl font-semibold text-white' style={{background : tbBg}}>
                    Donate: ${price}
               </button>
               </div>
          </div>
          <h1 className='my-5 text-2xl md:text-4xl font-bold'>{title}</h1>
          <p className='text-base font-normal text-[#0b0b0bb3]'>{des}</p>
     </div>
  )
}

export default DonationDetails