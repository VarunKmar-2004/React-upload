import React from 'react'
import single from '../Components/assets/single.png'
import double from '../Components/assets/double.png'
import triple from '../Components/assets/triple.png'
const Card = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4 flex justify-center items-center">
      <div className="max-w-[1240px] grid sm:grid-cols-3 gap-8 items-center justify-center">
        <div className=" h-[420px] py-6 bg-white shadow-md shadow-gray-700 border border-slate-500 hover:z-[2] hover:scale-105 duration-300 flex flex-col justify-center items-center rounded-md gap-1">
          <img className='w-[25%] mx-auto' src={single} alt='/'/>
          <h1 className='font-medium text-xl  mt-3 ml-[-16px]'>Single User</h1>
          <p className='ml-[-20px] mt-3 font-bold text-2xl sm:text-3xl py-2' >$149</p>
          <div className='flex flex-col py-2 justify-center items-center ml-[-20px]'>
              <p className='py-1 border-b-blue-400 mx-8 px-5 outline-none bg-white text-lg font-medium'>500 GB Storage</p>
              <p className='py-1 border-b-blue-400 mx-8 px-5 outline-none bg-white text-lg font-medium'>1 User Allowed</p>
              <p className='py-1 border-b-blue-400 mx-8 px-5 outline-none bg-white text-lg font-medium'>Send up to 2GB</p>
          </div>
          <button className="py-2 px-6 font-medium text-black bg-[#00df9a] mt-1 rounded-md hover:cursor-pointer ml-[-20px]">Start Trail</button>
        </div>
        <div className="h-[440px] py-6 bg-white shadow-md shadow-gray-700 border border-slate-500 hover:z-[2] hover:scale-105 duration-300 flex flex-col justify-center items-center rounded-md">
          <img className='w-[25%] mx-auto' src={double} alt='/'/>
          <h1 className='font-medium text-xl  mt-3'>Partnership</h1>
          <p className=' mt-3 font-bold text-2xl sm:text-3xl py-4'>$199</p>
          <div className='flex flex-col py-2 justify-center items-center'>
              <p className='py-1 border-b-blue-400 mx-8 px-5 outline-none bg-white text-lg font-medium'>1 TB Storage</p>
              <p className='py-1 border-b-blue-400 mx-8 px-5 outline-none bg-white text-lg font-medium'>3 User Allowed</p>
              <p className='py-1 border-b-blue-400 mx-8 px-5 outline-none bg-white text-lg font-medium'>Send up to 10GB</p>
          </div>
          <button className="py-2 px-6 font-medium text-[#00df9a] bg-black mt-1 rounded-md hover:cursor-pointer ">Start Trail</button>
        </div>
        <div className="h-[420px] py-6 bg-white shadow-md shadow-gray-700 border border-slate-500 hover:z-[2] hover:scale-105 duration-300 flex flex-col justify-center items-center rounded-md">
          <img className='w-[25%] mx-auto' src={triple} alt='/'/>
          <h1 className='font-medium text-xl  mt-3'>Triple</h1>
          <p className=' mt-3 font-bold text-2xl sm:text-3xl py-4'>$299</p>
          <div className='flex flex-col py-2 justify-center items-center'>
              <p className='py-1 border-b-blue-400 mx-6 px-4 outline-none bg-white text-lg font-medium'>5 TB Storage</p>
              <p className='py-1 border-b-blue-400 mx-6 px-4 outline-none bg-white text-lg font-medium'>10 User Allowed</p>
              <p className='py-1 border-b-blue-400 mx-6 px-4 outline-none bg-white text-lg font-medium'>Send up to 20GB</p>
          </div>
          <button className="py-2 px-6 font-medium text-black bg-[#00df9a] mt-1 rounded-md hover:cursor-pointer ">Start Trail</button>
        </div>
      </div>
    </div>
  )
}

export default Card