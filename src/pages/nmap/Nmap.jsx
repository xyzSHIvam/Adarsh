import React from 'react'
import { Link } from 'react-router-dom'
const Nmap = () => {
  return (

    <div className='w-screen h-screen xl:w-auto xl:h-full'>
        <video className='h-full w-full object-cover' src='/nmapbg.mp4' autoPlay loop muted/>
      <div className=' text-sm flex w-full h-full flex-col absolute top-[20vh] justify-center items-center text-white md:text-2xl font-extrabold md:flex-row md:justify-around md:top-[20vh] xl:top-[20vh]'>
        
        
        <div className='p-4'>
          <form className='flex flex-col gap-3 md:gap-7 p-3 border-4 md:border-8 border-white' action="/nmap">
            <div className='flex flex-col gap-2 md:gap-3'>
              <label for="target">Target:</label>
              <input className='w-full border-2 border-white bg-transparent' type="text" name="Target" />
            </div>

            <div className='flex flex-col gap-2 md:gap-3'>
              <label for="flags">Flags:</label>
              <select className='w-full border-2 border-white bg-transparent' name="flags">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>

            <div className='flex flex-col gap-2 md:gap-3'>
              <label for="option">Option:</label>
              <input className='w-full border-2 border-white bg-transparent' type="text" name="option" />
            </div>

            <Link><button className='w-full bg-red-400 text-white'>submit scan</button></Link>
            <Link><button className='w-full bg-red-400 text-white'>Get Scan History</button></Link>




          </form>
        </div>


        <div className='p-4 '>
          <form className='flex flex-col gap-3 md:gap-7 p-4 md:p-5 md:py-8 border-4 md:border-8 border-white' action="/nmap">
            <div className='flex flex-col gap-2 md:gap-3'>
              <label for="scanID">Scan ID:</label>
              <input className='w-full border-2 border-white bg-transparent' type="text" name="scanID" />
            </div>
            <div className='flex justify-around gap-3' >

              <Link><button className='p-2 text-xs bg-red-400 text-white'>submit scan</button></Link>
              <Link><button className='p-2 text-xs bg-red-400 text-white'>Get Scan History</button></Link>
            </div>

            <div className='flex flex-col gap-2 md:gap-3'>
              <label for="sr">Scan result:</label>
              <input className='w-full border-2 border-white bg-transparent' type="text" name="sr" />
            </div>

            <div className='flex flex-col gap-2 md:gap-3'>
              <label for="sh">Scan History:</label>
              <input className='w-full border-2 border-white bg-transparent' type="text" name="sh" />
            </div>





          </form>
        </div>


      </div>
    </div>
  )
}

export default Nmap
