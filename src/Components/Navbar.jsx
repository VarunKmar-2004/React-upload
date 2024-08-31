import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [nav,setNav]=useState(false);
  return (
    <div className='flex justify-between text-white items-center max-w-[1240px] mx-auto px-4 h-24'>
        <h1 className='w-full text-3xl text-[#00df9a] font-bold'>React.</h1>
        <div>
            <ul className="hidden sm:flex">
                <li className="p-4 hover:cursor-pointer">Home</li>
                <li className="p-4 hover:cursor-pointer">Resources</li>
                <li className="p-4 hover:cursor-pointer">About</li>
                <li className="p-4 hover:cursor-pointer">Contact</li>
            </ul>
        </div>
        <div className='hover:cursor-pointer block sm:hidden ease-in duration-500' onClick={()=>{
            setNav(!nav);
        }}>
            {nav? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
        </div>
        <div className={nav? 'fixed left-[0%] top-0 w-[60%] h-full border-r border-gray-400 bg-black ease-in-out duration-500':'fixed left-[-100%]'}>
            <h1 className='text-3xl text-[#00df9a] font-bold m-4'>React.</h1>
             <ul className='pt-8 uppercase px-2'>
                <li className='p-4 border-b border-gray-300 hover:cursor-pointer'>Home</li>
                <li className='p-4 border-b border-gray-300 hover:cursor-pointer'>Resources</li>
                <li className='p-4 border-b border-gray-300 hover:cursor-pointer'>About</li>
                <li className='p-4'>Contact</li>
             </ul>
        </div>
    </div>
  )
}

export default Navbar