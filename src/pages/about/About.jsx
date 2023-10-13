import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='w-screen h-screen xl:w-auto xl:h-full'>
       <video className='h-full w-full object-cover' src='/aboutbg.mp4' autoPlay loop muted/>
       <div className='flex flex-col absolute top-[20vh] md:top-[30vh] w-full justify-center text-center gap-20 md:gap-28 p-4 xl:top-[40vh] '  > 
           <h1 className='text-white text-5xl font-black '>
           About us 
           </h1>
           <p className='text-white text-sm md:text-2xl xl:text-3xl'>
           Hitachi Energy is a global technology leader that is advancing a sustainable energy future for all. We serve customers in the utility, industry and infrastructure sectors with innovative solutions and services across the value chain. Together with customers and partners, we pioneer technologies and enable the digital transformation required to accelerate the energy transition towards a carbon-neutral future. We are advancing the world’s energy system to become more sustainable, flexible and secure whilst balancing social, environmental and economic value. Hitachi Energy has a proven track record and unparalleled installed base in more than 140 countries. 
           </p>
     </div>
    </div>
  )
}

export default About
