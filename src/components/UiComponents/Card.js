import React from 'react'

const Card = ({image,name,index}) => {
  return (
    <div key={index} className='h-88.75 w-60 overflow-hidden rounded-[15px] relative  hover:shadow-lg'>
        <img src={image.src} className='w-full h-full absolute object-cover hover:scale-105 shadow-lg transform transition-transform duration-500' />
        <span className='relative text-center flex justify-center items-center text-white z-10 top-[90%] text-[16px] font-semibold'>{name}</span>
    </div>
  )
}

export default Card