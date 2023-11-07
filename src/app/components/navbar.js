"use client";
import React from 'react'
import skins from '../skins';

import Image from 'next/image'
import Link from 'next/link'
import { GiShoppingCart} from 'react-icons/gi';
import { usePathname } from 'next/navigation';
import tamperedglasses from '../tamperedglasses';
GiShoppingCart
const links =[
    {
        name:"skins",
        href:"c:/3rd Semester Project/masktekk/src/app/skins",
    },
    {
        name:"tamperedglasses",
        href:"/tamperedglasses",
    },
    {
        name:"myaccount",
        href:"/myaccount",
    },
];

export default function Navbar () {
    const pathname = usePathname();
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center '>
     <div className="logo">
     <Image width={250} height={500} src="/logo.png" alt=""/> 
     </div>
     <div className="nav">
     <ul className='flex items-center space-x-3 font-bold md:text-xl '>
     <li> <Link href={"/skins"}> skins</Link></li>
       <Link href={"/tamperedglasses"}> <li>tamperedglasses</li></Link>
       <Link href={'/'}><li>myaccount</li></Link>
       <Link href={'/'}> <li>about</li></Link>
     </ul>
     </div>
     <div className="cart absolute right-0 mx-5">
        <button>
            <GiShoppingCart className='text-4xl'/>
        </button>
     </div>
     </div>
     
  )
}

