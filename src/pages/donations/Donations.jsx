import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Donations(props) {

  const data = props.data;

  const [showAll, setShowAll] = useState(false);

  const Data = showAll ? data : data.slice(0, 4);

  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
        {
          Data.map((data) =>{

            const {id, pic, title, catagory, ctBg, cdBg, tbBg, des, price } = data;

            return(
              <div key={id} className='flex rounded-lg' style={{backgroundColor : cdBg}}>
                <img className='h-auto w-48 md:w-auto' src={pic} alt={title}/>
                <div className='ml-5 py-5 md:py-10 flex flex-col justify-around'>
                  <p className='w-fit text-sm font-semibold px-2 py-1 md:px-3 md:py-2 rounded' style={{backgroundColor : ctBg, color: tbBg}}>{catagory}</p>
                  <h1 className=' font-semibold text-lg md:text-xl mt-2'>{title}</h1>
                  <p className='font-semibold text-base my-2' style={{color: tbBg}}>${price}</p> 
                  <Link to={title} state={data}
                  className='w-fit px-2 py-1 md:px-4 md:py-2 rounded-lg text-white font-semibold text-lg'
                  style={{backgroundColor : tbBg}}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-center'>
        {data.length > 4 && !showAll && (
          <button
          className='bg-[#009444] px-3 py-2 rounded-lg w-fit font-semibold text-base text-white'
          onClick={() => setShowAll(true)}>Show More</button>
        )}
      </div>
    </div>
  )
}

export default Donations