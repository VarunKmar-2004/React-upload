import React from 'react'

const Newletter = () => {
  return (
    <div className='w-full bg-black text-white py-16 grid gap-4 md:grid-cols-2 px-4'>
        <div>
        <h1 className='text-2xl font-medium'>Want tips & tricks to optimize your flow?</h1>
        <p className='text-sm my-1 text-gray-400 md:text-lg'>Sign up to newsletter and stay upp to date</p></div>
        <div className='flex flex-col justify-center gap-3'>
            <input type='text' className='w-full py-2 px-2 rounded-md text-black font-medium border border-[#00df9a]' placeholder="Enter your email"></input>
            <button className='py-2 px-2 w-[30%] font-medium text-black bg-[#00df9a] my-2 rounded-md hover:cursor-pointer outline-none'>Notify me</button>
        </div>
    </div>
  )
}

export default Newletter