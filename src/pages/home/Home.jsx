import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-screen h-screen xl:w-auto xl:h-full'>
     <video className='h-full w-full object-cover' src='/videoBg.mp4' autoPlay loop muted/>
     <div className='flex absolute top-[30vh] md:top-[70vh] md:justify-between w-full text-center flex-col md:flex-row gap-[40vh] md:gap-14'> 

     <div className='flex-1'> 
      <Link to="/Nmap" className='text-5xl font-extrabold text-white border-8 p-4'>BOX1</Link>
     </div>
     <div className='flex-1 '>  
      <Link to="/Nmap" className='text-5xl font-extrabold text-white border-8 p-4'>BOX2</Link>
     </div>
     </div>
    </div>
  )
}

export default Home
