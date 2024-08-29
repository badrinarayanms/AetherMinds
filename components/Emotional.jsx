import Image from 'next/image'
import React from 'react'

const emotional = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center h-full lg:-mt-60 lg:flex-row lg:px-10 lg:py-1 bg-[url('/assets/bluebg.png')] bg-cover bg-top bg-no-repeat ">
      
      <div className="flex flex-col justify-center items-center text-center lg:ml-5 lg:items-start lg:text-start 2xl:mr-72"> 
  
        <h1 className="font-gsans font-bold text-5xl mb-3 md:text-7xl lg:text-6xl  min-[1440px]:text-7xl 2xl:text-8xl lg:text-start xl:text-9xl lg:w-full bg-gradient-to-r from-[#5EA6C9] to-[#0B5D86] text-transparent bg-clip-text">Emotion Analysis <br/> Warning</h1>
        <p className="font-gsans font-light text-lg mt-2 md:text-3xl lg:text-start  xl:text-4xl text-center">Real-time detection of negative emotions<br/> in student inputs to provide timely support and alerts.
        </p>
      
        <div className="items-center mt-8"> 
          <button className="font-gsans font-normal text-white text-3xl md:px-20 py-3 px-28 xl:px-28 rounded-2xl bg-Aether hover:opacity-90 transition-opacity duration-300">Try Now</button>
        </div>
      </div>
     
      <div className="w-full md:w-[80%] lg:w-[50%] min-[1440px]:w-[70%] 2xl:w-[50%] flex justify-start items-start  min-[1440px]:h-[900px]  h-[600px] xl:h-[400px] relative -mt-20  md:mt-14 "> 
        <Image 
          src="/assets/emotional.png" 
          className="object-contain absolute  " 
          alt="emotional" 
          fill 
        />
      </div>
    </div>
  )
}

export default emotional;
