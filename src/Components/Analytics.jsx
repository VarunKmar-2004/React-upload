import React from 'react'
import Laptop from '../Components/assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='bg-white w-full py-10 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] my-4' src={Laptop} alt='/'/>
            <div className='flex flex-col justify-center px-2'>
                <p className=' font-medium text-[#00df9a] text-xl md:text-2xl'>Data Analytics Dashboard</p>
                <h1 className='text-xl font-bold sm:text-2xl md:text-3xl'>Manage Data Analytics Centrally</h1>
                <p className='font-medium text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto voluptates temporibus minima similique. Harum quod officiis quae vel necessitatibus, magni repellat eaque fugiat rerum provident asperiores possimus est vitae adipisci.</p>
                <button className=' py-2 px-2 w-[30%] font-medium text-[#00df9a] bg-black my-3 rounded-md hover:cursor-pointer'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics