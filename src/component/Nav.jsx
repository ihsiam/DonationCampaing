import React from 'react'
import { NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'
import './Navbar.css'

function Nav(props) {

     const setBtn = props.setBtn;

     const menubar = [
          {
               "id" : 1,
               "path" : "/",
               "title" : "Home"
          },
          {
               "id" : 2,
               "path" : "/donations",
               "title" : "Donations"
          },
          {
               "id" : 3,
               "path" : "/statistics",
               "title" : "Statistics"
          }
     ]

     const resAnimate = {
          hidden: { y: -20, height: 0},
          show: {
               height: "auto", y: 0,
               transition: { duration: 0.5, ease: "easeIn" },
          },
          exit: {
               opacity: 0,
               height: 0,
               transition: { duration: 0.1, ease: "easeIn" },
          },
     };


  return (
    <>
     {
          menubar.map((menu)=>(
               <NavLink
               key={menu.id}
               className='py-2 md:py-0'
               activeClassname = 'active'
               to={menu.path}>
                    <motion.h1
                    variants={resAnimate}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='font-bold tracking-widest'
                    onClick={() => setBtn(false)}
                    >
                    {menu.title}
                    </motion.h1>
               </NavLink>
          ))
     }
    </>
  )
}

export default Nav