import React, { useState } from 'react'
import Logo from '../img/Logo.png'
import Nav from './Nav'
import {motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


function Navbar() {

     const [btn, setBtn] = useState(false);

     const container = {
          hidden: { opacity: 0 },
          show: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
          },
     };


  return (
     <div className='bg-black/10 rounded-lg z-[20] mx-auto flex flex-wrap justify-between items-center w-full mt-2 py-2'>
          <img className=' w-32 md:w-48 h-auto' src={Logo} alt=""/>
          <>
               <div className='w-1/3 flex justify-end px-2'>
                    <div className='hidden w-full md:flex justify-between'>
                         <Nav/>
                    </div>
                    <button
                    className='md:hidden'
                    onClick={() => setBtn(!btn)}>
                         <FontAwesomeIcon className='text-xl' icon={btn?faXmark:faBars} />
                    </button>
               </div>
               <AnimatePresence mode='wait'>
                    {btn && (
                         <motion.div
                         variants={container}
                         initial="hidden"
                         animate="show"
                         className='flex flex-col basis-full items-center md:hidden'>
                              <Nav setBtn={setBtn}/>
                         </motion.div>
                    )}
               </AnimatePresence>
          </>
    </div>
  )
}

export default Navbar