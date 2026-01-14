"use client"
import React from 'react'
import Navbar from '../navbar/Navbar.js'
import { SearchIcon } from 'lucide-react'

const Homepage = () => {
    
  return (
    <div className='w-full relative'>
         <Navbar/>
      <div className='flex flex-col justify-center items-center h-screen w-full ' >
        
         <h1 className='text-[28px] font-normal  ' >It's time for new</h1>
         <h1 className='text-[28px] font-bold  ' >Thrills</h1>
         <div className=' px-4 py-2 flex justify-between ' >

          <div className='px-4 py-2  border-2 border-green-400 w-100 rounded-md flex flex-row'>
         <input className='grow-2 border-none outline-none' type='text' placeholder='Search Destinations, Tours, Activities ' />
          <SearchIcon/>
          </div>
         </div>
      </div>
      {/* second */}
      <div>

      </div>
    </div>
  )
}

export default Homepage