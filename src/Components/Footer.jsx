import React from 'react'
import {FaFacebook,FaGithubSquare,FaInstagram,FaDribbbleSquare,FaTwitter
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full mx-auto'>
        <div className='w-full py-12 px-2 bg-black grid sm:grid-cols-2 gap-1'>
            <div className='text-white w-[50%] mx-4 mt-2'>
                <h1 className='w-full text-3xl text-[#00df9a] font-bold'>React.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum cumque aliquam deleniti alias ea, reiciendis minima? Quia.</p>
                <div className='flex gap-5 py-2 sm:w-full mx-2'>
                    <FaFacebook size={30}/>
                    <FaDribbbleSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitter size={30}/>
                </div>
            </div>
            <div className='w-full flex gap-3 justify-around mt-3'>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-medium text-lg text-gray-300'>Solutions</h1>
                    <ul className='text-white py-2 flex flex-col gap-2'>
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-medium text-lg text-gray-300'>Support</h1>
                    <ul className='text-white py-2 flex flex-col gap-2'>
                        <li>Pricing</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                        <li>APIStatus</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-medium text-lg text-gray-300'>Company</h1>
                    <ul className='text-white py-2 flex flex-col gap-2'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobbs</li>
                        <li>Partners</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer