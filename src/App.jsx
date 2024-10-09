import React from 'react'
import { FaInstagram, FaLinkedinIn, FaSnapchatSquare, FaTwitter } from 'react-icons/fa'
import { IoLogoFacebook, IoLogoTwitch } from 'react-icons/io'
import image from './assets/image.png';
import { GoSearch } from 'react-icons/go';


const App = () => {
  return (
    <div className='bg-black text-white   '>
<div className=' md:block hidden'>
<div className="flex justify-between items-center p-4 w-full h-10">
  <ul className="flex space-x-3 ">
    <li className=' flex items-center justify-center w-10 h-10 hover:bg-gray-200 hover:text-stone-950  transition-colors' ><IoLogoFacebook /></li>
    <li className= 'flex items-center justify-center  w-10 h-10 hover:bg-gray-200 hover:text-stone-950 transition-colors'><FaInstagram /></li>
    <li className='flex items-center justify-center  w-10 h-10 hover:bg-gray-200 hover:text-stone-950 transition-colors'><FaSnapchatSquare /></li>
    <li className='flex items-center justify-center  w-10 h-10 hover:bg-gray-200 hover:text-stone-950  transition-colors'><IoLogoTwitch /></li>
    <li className='flex items-center justify-center  w-10 h-10  hover:bg-gray-200 hover:text-stone-950 transition-colors '><FaTwitter /></li>  
    <li className='flex items-center justify-center  w-10 h-10 hover:bg-gray-200 hover:text-stone-950 transition-colors'><FaLinkedinIn className='text-xl' /></li>
  </ul>
  <div className="flex items-center justify-center  ml-auto w-10 h-10 hover:bg-gray-200 hover:text-stone-950  transition-colors">
    <GoSearch />
  </div>
</div>
</div>




       <div className='p-20 bg-white'>
        <div className='text-center text-black'>
          <h1 className='font-bold text-5xl mb-3 md:text-6xl '>JANE BLOGLIFE</h1>
          <p className='font-bold'>Welcome to the blog of <span className='bg-black p-1 text-white'>Jane's world</span></p>
        </div>
       </div>
      
<div className="relative">
  <img src={image} alt="Fashion Blog" className="w-full h-auto object-cover" />

  
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 md:left-10 md:p-4">
    <h1 className="text-4xl text-white md:text-5xl">Jane's</h1>
    <h1 className="text-5xl font-bold text-white md:text-7xl md:blocl hidden">FASHION BLOG</h1>

    
    <div className="mt-4">
      <button className="px-6 py-3 bg-slate-50 opacity-80 text-black hover:bg-gray-300 w-fit">
        SUBSCRIBE
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default App
