import Image from 'next/image'
import React from 'react'

const Emobuddy = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center h-full lg:-mt-60 lg:flex-row-reverse lg:px-10 lg:py-1 mb-24 min-[1440px]:-mt-52'>
      
      <div className="flex flex-col justify-center items-center text-center lg:ml-5 lg:items-start lg:text-start 2xl:mr-72"> 
  
        <h1 className="font-gsans font-bold text-6xl md:text-8xl lg:text-7xl lg:text-start xl:text-9xl bg-gradient-to-r from-[#5EA6C9] to-[#0B5D86] text-transparent bg-clip-text">EMO-BUDDY</h1>
        <p className="font-gsans font-light text-lg mt-2 md:text-3xl lg:text-start  xl:text-4xl text-center">Provide confidential mental health support <br/>and resources through a multilingual chatbot.</p>
      
        <div className="items-center mt-8"> 
          <button className="font-gsans font-normal text-white text-3xl md:px-20 py-3 px-28 xl:px-28 rounded-2xl bg-Aether hover:opacity-90 transition-opacity duration-300">Try Now</button>
        </div>
      </div>
     
      <div className="w-full lg:w-[40%] min-[1440px]:w-[35%] flex justify-start items-start  min-[1440px]:h-[900px]  h-[600px] xl:h-[400px] relative mt-8 md:mt-14 "> 
        <Image 
          src="/assets/emobuddy.png" 
          className="object-contain absolute mt-0" 
          alt="Emobuddy" 
          fill 
        />
      </div>
    </div>
  )
}

export default Emobuddy;
