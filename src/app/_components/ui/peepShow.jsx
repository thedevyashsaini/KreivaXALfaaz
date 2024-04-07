"use client"
import React from 'react'
import LandingPage from '../landingPage'
import { useParallax } from 'react-scroll-parallax'
import { useState } from 'react'
export default function PeepShow() {
  const [display,setDisplay] = useState(true)
  const musicbox = useParallax({ 
  shouldAlwaysCompleteAnimation:"false",
  onProgressChange:(progress) => {
    console.log(progress)
    if(progress>=1){
       setDisplay(false)
    }
  
  },
  scale:[1,12],
  translateY:["0vh","400vh"]}
  )
  return (

    <div className="flex flex-col items-center">
      <img ref={musicbox.ref} src="/PeepShow.svg" alt="music box"
      className={`h-half-screen z-0 ${!display ? "hidden" : ""}`} />
     
     <LandingPage />
       
    </div>
  )
}
