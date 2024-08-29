import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 border-b-2 items-center md:px-14 px-5 md:py-7 ">
        <div className="flex justify-between items-center" >
            <Image src='/assets/icon.png'  className="mr-2" width={40}  height={40} alt="logo"></Image>
            <h1 className=" font-gsans font-bold  md:text-3xl text-xl">AetherMinds</h1>
        </div>
        <div className="items-center">
            <button className="font-gsans md:font-medium text-white md:text-xl md:px-6 py-2 px-4 font-bold text-sm rounded-lg bg-Aether hover:opacity-90 transition-opacity duration-300">Get Started</button>
        </div>
    </div>
  )
}

export default Navbar