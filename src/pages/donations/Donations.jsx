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

            const {id, pic, title, category, ctBg, cdBg, tbBg, des, price } = data;

            return(
              <div key={id} className='flex rounded-lg' style={{backgroundColor : cdBg}}>
                <img className='w-40 md:w-auto' src={pic} alt={title}/>
                <div className='ml-2 md:ml-5 py-2 md:py-10 flex flex-col justify-around'>
                  <p className='w-fit mb-1 text-sm font-semibold px-2 py-1 md:px-3 md:py-2 rounded' style={{backgroundColor : ctBg, color: tbBg}}>{category}</p>
                  <h1 className=' font-semibold text-base md:text-xl md:mt-2'>{title}</h1>
                  <p className='font-semibold text-base md:my-2' style={{color: tbBg}}>${price}</p> 
                  <Link to={title} state={data}
                  className='w-fit mt-1 px-2 py-1 md:px-4 md:py-2 rounded-lg text-white font-semibold md:text-lg'
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