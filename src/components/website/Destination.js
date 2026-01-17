import React from 'react'
import Navbar from '../navbar/Navbar'
import HolidayPackageCard from '../UiComponents/HolidayPackageCard'
import { RotateCcw } from 'lucide-react'

const Destination = ({ destinationName }) => {
    const Nights = [
        "3 Nights",
        "5 Nights",
        "7 Nights",
        "9 Nights",
        "10 Nights",
        "12 Nights",
    ]
    const Category = [
        "Adventure",
        "Family",
        "Hill Station",
        "Weekend",
        "Honeymoon",
        "Wildlife",
        "Group Tours",
        "Religious",
        "Heritage",
        "Culture",
        "Romantic",
        "Leisure",
        "Private"
    ]
    const Departure =[

    ]
    const Destination = [
        "Shimla",
        "Manali",
        "Srinagar",
        "Kargil",
        "Leh",
        "Nubra",
        "Pangong",
        "Jispa",
        "Delhi",
        "Narkanda",
        "Sangla",
        "Chitkul",
        "Nako",
        "Kaza",
        "Chandratal",
        "Kalpa",
        "Sarahan",
        "Jibhi",
        "Dalhousie",
        "Amritsar",
        "Dharamshala"
    ]
    const Price = [
        "30001-35000",
    ]
    return (
        <div className='w-full overflow-hidden'>
            <Navbar bgwhite={true} />
            {/* Hero */}
            <div className='w-full relative h-[55vh] overflow-hidden flex flex-col justify-center items-center ' >
                <div className="absolute inset-0 -z-20 overflow-hidden bg-black flex justify-end">
                    <img src="https://www.holidays2cherish.com/public/images/search-result-listing.jpg" className="object-cover w-full align-middle brightness-75 " alt="Bali" />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold text-white '>Manali Tour Packages!</h1>
                    <hr className=' h-0.5  mt-5 ' />
                    <p className='mt-10 text-white text-center' >Request Callback</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-10 bg-black/70  z-0  " />
                <div className='text-white absolute bottom-2 left-[15%]'>
                    <span>Holidays</span>
                    <span className='font-semibold' >/{destinationName}</span>
                </div>
            </div>
            {/* Main */}
            <div className=' w-full flex flex-row gap-10 sm1:mx-10 xl:mx-18 my-10'>
                {/* Filter */}
                <div className='  w-[20%] h-screen overflow-y-scroll shadow-2xl' >
                    <div className='p-5'>
                        <p className='font-semibold'>7 out of 7 packages</p>
                        <p className='flex justify-between'>
                            <span>Filter</span>
                            <span className='flex items-center gap-x-2' ><RotateCcw />Reset</span>
                        </p>
                        <hr className='h-0.5 bg-black' />
                        {/* Number of Nights */}
                        <div className=''>
                            <div><p className='font-bold mt-2' >Number of Nights</p></div>
                            <div className="mt-2 h-62 overflow-scroll p-5">
                                {
                                    Nights.map((n, i) =>
                                        <div key={i} className='flex items-center  gap-x-2'>
                                            <input type='checkbox' className='p-2 scale-125' />
                                            <label className='text-[#807d7d]'>{n}</label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {/* Category */}
                         <div className=' p-5'>
                            <div><p className='font-bold mt-2' >Category</p></div>
                            <div className="mt-2 h-62 overflow-scroll p-5">
                                {
                                    Category.map((c, i) =>
                                        <div key={i} className='flex items-center  gap-x-2'>
                                            <input type='checkbox' className='p-2 scale-125' />
                                            <label className='text-[#807d7d]'>{c}</label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {/* Departure From */}
                         <div className='h-62 overflow-y-scroll p-5'>
                            <div><p className='font-bold mt-2' >Departure From</p></div>
                            <div className="mt-2">
                                {
                                    Departure.map((n, i) =>
                                        <div key={i} className='flex items-center  gap-x-2'>
                                            <input type='checkbox' className='p-2 scale-125' />
                                            <label className='text-[#807d7d]'>{n}</label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {/* Destination */}
                         <div className='h-62 overflow-y-scroll p-5'>
                            <div><p className='font-bold mt-2' >Destination</p></div>
                            <div className="mt-2">
                                {
                                    Destination.map((d, i) =>
                                        <div key={i} className='flex items-center  gap-x-2'>
                                            <input type='checkbox' className='p-2 scale-125' />
                                            <label className='text-[#807d7d]'>{d}</label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {/* Price */}
                         <div className='h-62 overflow-y-scroll p-5'>
                            <div><p className='font-bold mt-2' >Price</p></div>
                            <div className="mt-2">
                                {
                                    Price.map((n, i) =>
                                        <div key={i} className='flex items-center  gap-x-2'>
                                            <input type='checkbox' className='p-2 scale-125' />
                                            <label className='text-[#807d7d]'>Rs{n}</label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card */}
                <div className=' w-[60%] h-100'>
                    <HolidayPackageCard />
                </div>
            </div>
        </div>
    )
}

export default Destination