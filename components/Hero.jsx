import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[url('/assets/grid.png')] bg-cover bg-center bg-no-repeat  mb-0  h-screen w-full text-center">
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="font-gsans font-bold text-6xl -mt-[12rem]  md:text-8xl xl:text-9xl">AetherMinds</h1>
            <p className="font-gsans font-light text-lg  mt-2 md:text-3xl xl:text-4xl ">Elevate learning and well-being to a higher plane, <br/>where academic success meets mental clarity.</p>
            <div className="items-center mt-14">
                <button className="font-gsans font-normal text-white text-5xl md:px-20 py-3 px-14  xl:px-28 xl:p rounded-2xl bg-Aether hover:opacity-90 transition-opacity duration-300">Get Started</button>
            </div>
        </div>
        
    </div>
  );
};

export default Hero;
