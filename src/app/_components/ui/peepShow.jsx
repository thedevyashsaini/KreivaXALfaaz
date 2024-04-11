"use client"
import React from 'react'
import Plx from "react-plx";
import { useState } from 'react'
export default function PeepShow() {
  const [display,setDisplay] = useState(true)
  const exampleParallaxData = [
    {
      start:"self",
      duration:600,
      properties: [
        {
          startValue: 1,
          endValue: 4,
          property: "scale"
        }
      ]
    },
  ]

  
  // const musicbox = useParallax({ 
  // shouldAlwaysCompleteAnimation:"false",
  // onProgressChange:(progress) => {
  //   console.log(progress)
  // },
  // translateY :['-60vh','-20vh'],
  // scale: [1,6]}
  // )
  return (
   <div className="flex flex-col items-center">
     <img src="/light_d.svg" alt="lights" className='justify-self-start z-0' />
     <Plx parallaxData={exampleParallaxData} className=''>
        <img src="/PeepShow.svg" alt="music box" className={`z-10 w-780 mx-auto -translate-y-peep`} />
     </Plx>
   </div>
  )
}
