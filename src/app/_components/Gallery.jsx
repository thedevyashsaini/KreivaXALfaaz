'use client'
import './gallery.css';
import Footer from './Footer.jsx'
import Image from 'next/image'
import Plx from "react-plx";
import ThreeDCardDemo from './ui/tryingout';
import Test from './ui/tryingout'

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
                {/* <header className="mix-blend-multiply absolute">
                    <div className="nav w-1920" style={{ transform: "translate(0, -100px) rotate(-4.5deg)",border:"red 1px solid" }}>
                        <img
                        className="navBack object-left w-full object-cover h-auto"
                        src="EventTopFilm.svg"
                        />
                    </div>
                </header> */}
            <div className="body-gallery flex items-center phone-baseline relative flex-col overflow-hidden" id="galleryPage">
                <h1 className="text-red-700 text-8xl py-8 px-10 ph-text-5xl tracking-tighter translate-y-14 -ms-translate-y-60 relative z-40">Gallery</h1>
                <div className="gallery-display flex flex-wrap justify-center max-w-5xl hv-58 max-h-3xl py-10 pt-24 mt-4 gap-20 overflow-scroll scroll-smooth border-red relative z-30">
                    <div className="gallery-card -translate-y-7 -md-translate-y-7 -rotate-2">
                      <ThreeDCardDemo imgSrc="/kreiva1.JPG" />
                    </div>
                    <div className="gallery-card rotate-2">
                      <ThreeDCardDemo imgSrc="/kreiva2.JPG" />
                    </div>
                    <div className="gallery-card -translate-y-8 -md-translate-y-8 rotate-2">
                      <ThreeDCardDemo imgSrc="/kreiva3.JPG" />
                    </div>
                    <div className="gallery-card -translate-y-7 -md-translate-y-7 rotate-7">
                      <ThreeDCardDemo imgSrc="/kreiva4.JPG" />
                    </div>
                    <div className="gallery-card rotate-3">
                      <ThreeDCardDemo imgSrc="/kreiva5.JPG" />
                    </div>
                    <div className="gallery-card -translate-y-8 -md-translate-y-8 -rotate-6">
                      <Test imgSrc="/kreiva6.JPG" />
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
                
                <Plx parallaxData={exampleParallaxData} className="gitar-element absolute z-30 ml-24 hidden md:block">
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