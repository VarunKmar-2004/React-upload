import React from 'react'
import {ReactTyped} from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white bg-black'>
        <div className="h-screen mt-[-96px] mx-auto text-white flex justify-center flex-col items-center">
            <p className="uppercase px-2 font-medium text-[#00df9a]">Growing with data analytics</p>
            <h1 className='font-bold text-2xl sm:text-3xl sm:px-3 md:text-4xl md:px-2'>Grow with Data</h1>
            <div className='flex gap-2 items-center'>
                <p className="py-1 font-medium text-white text-lg sm:text-xl md:text-2xl">fast,flexible,financing for</p>
                <ReactTyped className='py-1 font-medium text-gray-500 text-lg sm:text-xl md:text-2xl' strings={['BTB','SASS','BTC']} typeSpeed={40} backSpeed={50} loop/>
            </div>
            <p className='font-medium text-lg text-gray-500 px-4 text-center'>Monitor your data analytics to increase revenue for BTB,BTC,&SASS platforms. </p>
            <button className="py-2 px-4 font-medium text-black bg-[#00df9a] my-3 rounded-md hover:cursor-pointer">Get Started</button>
        </div>
    </div>
  )
}

export default Hero