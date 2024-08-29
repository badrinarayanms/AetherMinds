import Image from "next/image";
import Link from "next/link";
import Emobuddy from '@/components/Emobuddy'
import Emotional from '@/components/Emotional'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Wcu from '@/components/Wcu'
import React from 'react'

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <Hero/>
      <Emobuddy/>
      <Emotional/>
      <Wcu/>
      
    </div>
  );
}
