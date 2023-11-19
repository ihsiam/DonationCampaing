import React from 'react'
import Data from '../Data.json'
import { Link } from 'react-router-dom';

function Container() {
  return (
    <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5'>
      {
        Data.map((data) =>{

          const {id, pic, title, catagory, ctBg, cdBg, tbBg, des, price } = data;

          return(
            <Link to={title} state={data} key={id}>
              <div className='flex flex-col rounded-lg h-56 md:h-auto' style={{backgroundColor : cdBg}}>
                <img src={pic} alt={title}/>
                <div className='flex flex-col px-2 py-4'>
                  <p className='w-fit text-sm font-semibold px-2 py-1 md:px-3 md:py-2 rounded' style={{backgroundColor : ctBg, color: tbBg}}>{catagory}</p>
                  <h1 className='mt-2 text-lg md:text-xl font-semibold' style={{color: tbBg}}>{title}</h1>
                </div>     
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Container