import React from 'react'
import Feature from './Feature'

const Wcu = () => {
    const features=[{title:"Emotion Analysis Warning",desc:"Real-time detection of negative emotions in student inputs to provide timely support and alerts."},{title:"Grade Prediction",desc:"Predict future academic performance using machine learning models based on historical student data."},{title:"Interactive Flashcards",desc:"Engage students with a self-quizzing flashcard system to reinforce learning."},{title:"Gamified Learning",desc:"Boost student engagement through levels, points, and rewards integrated into the learning experience."},{title:"Mental Health Chatbot",desc:"Provide confidential mental health support and resources through a multilingual chatbot."},{title:"Student Community Hub",desc:"A moderated space for students to connect, share ideas, and offer mutual support."},]
  return (
    <div className="w-full h-screen">
        <div className="flex flex-col justify-center items-center text-center lg:ml-5 lg:items-start lg:text-start 2xl:mr-72 p-5 py-7"> 
  
            <h1 className="font-gsans font-bold text-4xl mb-3 md:text-7xl lg:text-6xl  min-[1440px]:text-7xl 2xl:text-8xl lg:text-start xl:text-9xl lg:w-full ">Why choose us ?</h1>
            <p className="font-gsans font-light text-[0.8rem] font-semibold md:font-medium mt-2 md:text-3xl lg:text-start md:text-2xl xl:text-4xl text-center">Choose us for a balanced approach to learning and well-being.<br/> Enjoy engaging tools and personalized support</p>
        </div>

        <div className="w-full p-10">
            <div className="flex  justify-evenly flex-wrap">
                {features.map((feature,index)=>{
                    return < Feature key={index} title={feature.title} desc={feature.desc}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Wcu