"use client"
import { Mail, Phone } from 'lucide'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { Menu, PhoneCall } from 'lucide-react'

const Navigation = [
    {
        path:"/",
        name:"Home",
        icon:""
    },
    {
        path:"/domestic",
        name:"Domestic",
        icon:""
    },
    {
        path:"/international",
        name:"International",
        icon:""
    },
    {
        path:"/visaassistance",
        name:"Visa Assistance",
        icon:""
    },
    {
        path:"/payonline",
        name:"Pay Online",
        icon:""
    },
    {
        path:"/aboutus",
        name:"About Us",
        icon:""
    },
    {
        path:"/travelogue",
        name:"Travelogue ",
        icon:""
    },
]

const [mobileMenu, setMobileMenu] = useState(false)

const Navbar = () => {
  return (
    <div className='flex flex-col w-full backdrop-blur-[5px] absolute'>
        <ul className='flex gap-x-4 justify-end mx-15'>
          <li><a className='hover:text-green-700 font-bold' href="tel:+91 9999859250"> +91 9999859250</a></li>
        <li> <a className='hover:text-green-700 font-bold' href="mailto:info@holidays2cherish.com">info@holidays2cherish.com</a></li>
        <Link className='hover:text-green-700 font-bold' href="/contact">Contact Us</Link>
        </ul>
    <div className='mx-15 flex justify-between items-center '>
        <img className='' src={Logo.src}  alt='logo'/>
        <ul className=' hidden md:flex gap-x-4'>
            {
                Navigation.map((item,index)=>
                 <Link className='hover:text-green-700 font-bold' href={item.path} key={index}  >{item.name}</Link>
                )
            }
        </ul>
        {/* Mobile Navigation */}
        <span onClick={()=>setMobileMenu(true)} className='md:hidden flex'><Menu/></span>
        {
            mobileMenu && (
                <ul className=' flex flex-col md:hidden gap-y-4 w-full'>
            {
                Navigation.map((item,index)=>
                 <Link className='hover:text-green-700 font-bold' href={item.path} key={index}  >{item.name}</Link>
                )
            }
        </ul>
            )
        }
    </div>
    </div>
  )
}

export default Navbar