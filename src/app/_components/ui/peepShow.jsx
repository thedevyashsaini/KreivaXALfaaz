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
  },
  translateY :['-60vh','20vh']}
  )
  return (
   <div className="flex flex-col items-center overflow-hidden h-screen ">
     <img src="/light_d.svg" alt="lights" className='justify-self-start z-0' />
      <img ref={musicbox.ref} src="/PeepShow.svg" alt="music box"
      className={`z-10 w-2/4`} />
   </div>
  )
}
