import React from 'react'
import "./Notification.scss"
import { Link } from 'react-router-dom'
const Notification  = () => {
  return (
    <div className='flex justify-between p-4 items-center md:px-20'>
      <div className='logoContainer'>
       <Link to="/"><h1 className='text-xl font-bold md:text-5xl' >ADARSH</h1></Link> 
      </div>
      <div className='ImageContainer'>
          <Link to="https://www.hitachienergy.com/in/en"> <img className='md:w-48' src="/logo.svg" alt="hello"/></Link>
      </div>
    </div>
  )
}

export default Notification 
