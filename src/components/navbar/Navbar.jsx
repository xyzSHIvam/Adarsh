import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open,setOpen]=useState(false);

  
  return (

    <div >

<div className='flex  px-0 md:px-16'>

 <div className='flex  flex-1 px-4 items-center md:hidden'>

  { open==true?
  
  <img src="/close.png" className='w-7' onClick={()=>setOpen(false)}/>
  :
  
  <img src="/open.png" className='w-7' onClick={()=>setOpen(true)}/>
}
    </div>

    <div>
    <div className='hidden md:h-full md:p-4 md:flex md:flex-row md:gap-4 xl:gap-10 xl:text-xl md:text-lg'>
        <Link to="/about" className='hover:bg-red-500 hover:text-white'>About</Link>
        <Link to="/about" className='hover:bg-red-500 hover:text-white'>working</Link>
        <Link to="/about" className='hover:bg-red-500 hover:text-white'>contact</Link>
       
  
     </div>

    </div>
    
     <div className='flex-1 flex justify-end'>
      <Link to="https://www.hitachienergy.com/in/en"><img className='w-36 md:w-52 xl:w-52' src="data:image/png;base64,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"/></Link>
     </div>
     </div>
     {open && <div className='absolute w-full p-4 flex flex-col gap-4 z-50 bg-red-400 text-white '>
        <Link to="/about" className=''>About</Link>
        <Link to="/about" className=''>working</Link>
        <Link to="/about" className=''>contact</Link>
       
  
     </div> }
    </div>
  )
}

export default Navbar
