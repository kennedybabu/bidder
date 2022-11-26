import React, { useState } from 'react'
import {IoMdClose} from "react-icons/io";
import {RiMenu3Fill, RiPlantFill} from 'react-icons/ri';
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false)

  let activeStyle = {
    textDecoration: "underline",
  };


  
  return (
    <div className='w-full absolute top-0 left-0 h-[60px] px-4 flex justify-between items-center'>
      <Link to='/' className='h-full flex items-center z-50'>
          <p className='text-xl font-[600] lg:text-white'>agribid</p>
          <RiPlantFill className='ml-1 text-green-600 text-2xl' />          
      </Link>

      {/* links */}
      <div className='hidden md:flex z-20'>
      <NavLink to='/signup' style={({ isActive }) => isActive ? activeStyle : undefined} className='mx-2 underline underline-offset-4'>Signup</NavLink>
      <NavLink to='/login' style={({ isActive }) => isActive ? activeStyle : undefined} className='mx-2 underline underline-offset-4'>Login</NavLink>
          <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : undefined} className='mx-2 underline underline-offset-4'>Home</NavLink>
          <NavLink to='/products-list' style={({ isActive }) => isActive ? activeStyle : undefined} className='mx-2 underline-offset-4'>Products</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined} className='mx-2 underline-offset-4'>Account</NavLink>

      </div>


      {/* toggle mobile nav */}
      <div onClick={(e) => setNav(!nav)} className='cursor-pointer md:hidden z-50 fixed top-4 right-4'>
         {nav ? <IoMdClose /> :  <RiMenu3Fill />}
      </div>

      {nav ? (
        <div className='flex  z-40 flex-col justify-center pl-14 fixed top-0 bottom-0 right-0  w-[60%] z-4 bg-[#f8f9fad7]'>
            <div className="w-full flex justify-center h-screen flex-col">
              <NavLink to='/' className='my-4'>Home</NavLink>
              <NavLink to='/products-list' className='my-4'>Products</NavLink>
              <NavLink className='my-4'>Account</NavLink>
            </div>
        </div>
      ) : null}
    </div>
  )
}

export default Navbar