import React from 'react'
import { FaInstagram, FaLinkedinIn, FaSnapchatSquare, FaTwitter } from 'react-icons/fa'
import { IoLogoFacebook, IoLogoTwitch } from 'react-icons/io'
import image from './assets/image.png';
import { GoSearch } from 'react-icons/go';
import girl from './assets/girl_hat.jpg';
import avatar from './assets/avatar_girl2.jpg';
import avatar_smoke  from'./assets/avatar_smoke.jpg';
import bandmember from './assets/bandmember.jpg';
import workshop from './assets/workshop.jpg';
import man_hat from './assets/man_hat.jpg'



const App = () => {
  return (
    <div className='text-white  '>
<div className=' md:block hidden bg-black'>
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
    <h1 className="text-5xl font-bold text-white md:text-7xl md:block hidden">FASHION BLOG</h1>

    
    <div className="mt-4">
      <button className="px-6 py-3 opacity-80 text-black hover:bg-gray-300 w-fit">
        SUBSCRIBE
      </button>
    </div>
  </div>
</div>

<div className=' bg-neutral-200 flex  '>
  <div className=' w-3/4  bg-white p-2 m-10 shadow-md text-black text-center font-bold'>
    <h1 className='text-2xl p-5'>TITLE HEADING</h1>
    <p>Title description, <span className='text-gray-400'>May 2, 2016</span> </p>
      <img src={girl} alt='image' className='p-4 mt-5 w-full '/>
      <p className='font-normal p-3 text-left'><span className='font-bold '>More Hats!</span> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
<br/><br/>
Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>



<div className='flex justify-between items-center mt-5 mb-10 '>

<button className='bg-white text-back px-7 py-2 m-2 hover:bg-stone-400  border-2 border-black' >Liked</button>
<div>
<button className='bg-black text-white px-7 py-2 m-2 hover:bg-stone-400'>Replies</button>
</div>

</div>
 <hr className='p-5'/>
  <div>
  <div className='flex '>
     <div className='w-24 m-2'>
      <img src={avatar_smoke} />
     </div>
     <div className='text-black m-3'>
       <h2 className='font-2xl'>George <span className='text-gray-400 font-normal'>May 3, 2015, 6:32 PM</span></h2>
       <p className='font-normal mr-5 p-3 '>Great blog post! Following
       </p>
     </div>
     </div>
  </div>
  </div>


  <div className='w-1/3 m-7 md:block hidden'>
    <img src={avatar} alt='girl' className='w-96 '/>
    <p className='bg-black p-3'>My Name 
      <br/><br/>
    Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.

    </p>
      
  <div className='bg-white mt-10 w-96  md:block hidden'>
    <h2 className='bg-black p-5 font-bold'>Popular Posts</h2>
       <div className='flex shadow-sm hover:bg-stone-200'> 
     <div className='w-16 m-2'>
      <img src={avatar_smoke} />
     </div>
     <div className='text-black m-3 '>
       <h2>Denim</h2>
       <p>Sed mattis nunc</p>
     </div>
     </div>

     <div className='flex shadow-sm hover:bg-stone-200'>
     <div className='w-16 m-2'>
      <img src={bandmember} />
     </div>
     <div className='text-black m-3'>
       <h2>Sweaters
       </h2>
       <p>Praes tinci sed
       </p>
     </div>
     </div>
    
    <div className='flex shadow-sm hover:bg-stone-200'>
     <div className='w-16 m-2'>
      <img src={workshop} />
     </div>
     <div className='text-black m-3'>
       <h2>Praes tinci sed
       </h2>
       <p>Ultricies congue</p>
     </div>
     </div>

      <div className='flex shadow-sm hover:bg-stone-200'>
     <div className='w-16 m-2'>
      <img src={avatar_smoke} />
     </div>
     <div className='text-black m-3'>
       <h2>Trends</h2>
       <p>Lorem ipsum dipsum
       </p>
     </div>
     </div>
  </div>
       <div className='h-screen mt-10'>
        <div className='h-80 bg-white flex flex-col'>
          <div className='bg-black h-[20%] flex items-center p-5'>
            <h1 className='text-white font-semibold'>Advertise</h1>
             </div>
               
               <div className='p-4 h-full w-full'>
                <div className='bg-gray-200 h-full w-full flex items-center justify-center'>
                  <p className='font-semibold text-lg text-black'>Your AD Here</p>

                </div>

               </div>
        </div>

       </div>
</div>

  </div>
  <div className=' bg-neutral-100 w-full'>
    <div className='w-3/4  bg-white p-2 m-10 shadow-md text-black text-center font-bold'>
     
     <h1 className='text-2xl p-5'>TITLE HEADING</h1>
     <p>Title description,<span className='text-gray-400'>April 23, 2016</span> </p>
     <img src={man_hat} alt='picture' className='p-4 mt-5 w-full '/>
     <p className='font-normal p-3 text-left'> <span className='font-bold'>Hats!</span> The trend this summer is hats for men!

Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>

<div className='flex justify-between items-center mt-5 mb-10'>

<button className='bg-white text-black px-7 py-2 m-2 hover:bg-stone-400 border-2 border-black'>Liked</button>
<div>
<button className='bg-black text-white px-7 py-2 m-2 hover:bg-stone-400'>Replies</button>
</div>

</div>
    </div>
    
  </div>
    </div>

   
  )
}

export default App
