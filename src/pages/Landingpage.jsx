import React from 'react'
import {BsSearch} from "react-icons/bs"
import {RiAuctionFill} from "react-icons/ri"
import {ImTruck} from 'react-icons/im'
import { useNavigate } from 'react-router-dom'



const Landingpage = () => {
  const navigate = useNavigate()

  const navigateUser = () => {
    navigate('/products-list')
  }

  return (
    <div className='w-full relative  flex flex-col items-center justify-center'>
      <div className='w-full'>
        <div id="landing" className="overlay h-screen w-full flex flex-col items-center justify-end pb-[20vh] lg:justify-center">
            <h2 className='text-2xl text-center pop font-bold'>Find and Bid Grocery deals and save actual money. </h2>
            <div onClick={() => navigateUser()} className='py-2 cursor-pointer px-4 mt-8 border border-green-600 rounded-[25px] hover:bg-green-600 hover:text-white transition'>get started</div>
        </div>
      </div>
      <div className='w-full flex flex-col bg-slate-300 text-center py-8'>
          <h3 className='text-2xl font-bold my-4'>Bid to buy, and get transport job.</h3>
        <div className='w-full flex flex-col md:grid md:grid-cols-3'>
          <div className='flex text-center items-center flex-col justify-center h-[200px] my-2 p-2 w-[200px] mx-auto bg-slate-100 rounded-[15px] shadow-md'>
            <BsSearch  className='text-4xl my-4'/>
            <p className='text-sm'>search for produce</p>
            <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
            </div>
            <div className='flex text-center items-center flex-col justify-center h-[200px] my-2 p-2 w-[200px] mx-auto  bg-slate-100 rounded-[15px] shadow-md'>
              <RiAuctionFill className='text-4xl my-4'/>
              <p>place your bid</p>
              <small>Lorem ipsum, dolor sit amet consectetur adipisicing.</small>
            </div>
            <div className='flex text-center items-center flex-col justify-center h-[200px] my-2 p-2 w-[200px] mx-auto  bg-slate-100 rounded-[15px] shadow-md'>
              <ImTruck className='text-4xl my-4'/>
              <p>pay and receive goods</p>
              <small className="text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage