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
  scale:[1,2],
  translateY:["0vh","400vh"]}
  )
  return (
   <div className="flex flex-col items-center overflow-hidden">
     <img ref={musicbox.ref} src="/light_d.svg" alt="lights" />
      <img ref={musicbox.ref} src="/PeepShow.svg" alt="music box"
      className={`z-0 ${!display ? "hidden" : ""}`} />
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
   </div>
  )
}
