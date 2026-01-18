import { CarFront, Image, Utensils } from 'lucide-react'
import React from 'react'

const HolidayPackageCard = () => {
  return (
    <div className='p-4 border shadow-[4px_4px_10px_rgba(0,0,0,0.15)]' >
         <div className='flex gap-x-7 relative' >
            <div>
                 <img className='w-69.5 h-37.75 shadow-[6px_6px_20px_rgba(0,0,0,0.18)] ' src='https://www.holidays2cherish.com/public/images/noimageother.jpg' alt='Destination' />
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Shimla Manali Luxury Tour Package by car</h1>
                <div className='mt-5' >
                    <p className='font-semibold' >6 Days, 5 Nights</p>
                    <p><span className='font-semibold'>Destinations -</span> Shimla, Manali</p>
                </div>
            </div>
            <p className='absolute right-0 font-semibold' >On Request</p>
         </div>
        <div className='flex justify-between mt-10'>
          <div className='flex gap-4' >
             <p className='flex flex-col items-center' ><Image/><span>Sightseeing</span></p>
             <p className='flex flex-col items-center' ><CarFront/><span>Transfer</span></p>
             <p className='flex flex-col items-center' ><Utensils /><span>Meal</span></p>
          </div>
          <div className='flex gap-4 items-center'>
            <button className=' px-2 py-1 text-white bg-[#3fa72a] rounded-[5px]' >View Details</button>
            <button className=' px-2 py-1 text-white bg-[#ff6600] rounded-[5px]' >Book Now</button>
          </div>
        </div> 
    </div>
  )
}

export default HolidayPackageCard