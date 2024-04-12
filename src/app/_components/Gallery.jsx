'use client'
import './gallery.css';
import Footer from './Footer.jsx'
import Image from 'next/image'
import Plx from "react-plx";
export default function Gallery() {
    const exampleParallaxData = [
        {
          start:"self",
          duration:600,
          properties: [
            {
              startValue: -300,
              endValue: 350,
              property: "translateY"
            },
            {
                startValue: 0,
                endValue: -30,
                property: "rotate",
              }
          ]
        },
      ]

      const musicParallaxData = [
        {
          start:"self",
          duration:800,
          properties: [
            {
                startValue: -120,
                endValue: 0,
                property: "rotateY",
              }
          ]
        },
      ]
    return (
        <>
            <div className="body-gallery flex items-center phone-baseline relative flex-col overflow-hidden">
                <h1 className="text-red-700 text-8xl py-8 px-10 ph-text-5xl tracking-tighter translate-y-14 -ms-translate-y-60 relative z-40">Gallery</h1>
                <div className="gallery-display flex flex-wrap justify-center max-w-5xl hv-58 max-h-3xl py-10 gap-20 overflow-scroll scroll-smooth border-red relative z-30">
                    <div className="gallery-card -translate-y-7 -md-translate-y-7 -rotate-2">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card rotate-2">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card -translate-y-8 -md-translate-y-8 rotate-2">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card -translate-y-7 -md-translate-y-7 rotate-7">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card rotate-3">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card -translate-y-8 -md-translate-y-8 -rotate-6">
                        <img src="#" alt="random"/>
                    </div>
                </div>
                <Footer />
                <Plx parallaxData={musicParallaxData} className="music-element absolute -rotate-6 z-30" >
                  <Image 
                    src="/music-gR.svg"
                    width = {180}
                    height = {180}
                    alt="music"
                  />

                </Plx>
                
                <Plx parallaxData={exampleParallaxData} className="gitar-element absolute z-30">
                  <Image 
                    src="/gitar-fL.svg"
                    width = {340}
                    height = {340}
                    alt="gitar"
                />
                </Plx>
                <Image className="baloon-element absolute z-30"
                    src="/gitar-baloon-fR.svg"
                    width = {310}
                    height = {310}
                    alt="gitar with baloon"
                />
            </div>
        </>
    );
}