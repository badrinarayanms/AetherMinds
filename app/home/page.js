
import Emobuddy from '@/components/Emobuddy'
import Emotional from '@/components/Emotional'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Wcu from '@/components/Wcu'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <Hero/>
      <Emobuddy/>
      <Emotional/>
      <Wcu/>
      
    </div>
  )
}

export default page