"use client";
import React from "react";
import Plx from "react-plx";
import "./eventPage.css";
import "./ui/TopNav.css";
import './gallery.css';
import ThreeDCardDemo from './ui/tryingout';
import Carousel from "./ui/slider";

export default function EventPage() {
  const fluteParallaxData = [
    {
      start:"self",
      duration:600,
      properties: [
        {
          startValue: 0,
          endValue: -90,
          property: "rotate"
        }
      ]
    },
]

const fluteParallaxDataPC = [
  {
    start:"self",
    duration:2000,
    properties: [
      {
        startValue: 0,
        endValue: 100,
        unit:"vh",
        property: "translateY"
      }
    ]
  },
]
  return (
    <>
      <div className="flex flex-col relative overflow-hidden custom-scrollbar bg-customBlue z-0" style={{minHeight: "100vh"}} id="eventPage">
        {/* <div
          alt="texture"
          className="texture w-full h-full fixed top-0 left-0"
        /> */}
        <header className="mix-blend-multiply">
          <div className="nav w-1920" style={{ transform: "translate(0, -70px) rotate(-4.5deg)" }}>
            <img
              className="navBack object-left w-full object-cover h-auto"
              src="EventTopFilm.svg"
            />
          </div>
        </header>
        <div className="flex flex-col text-customPeach w-full px-12 md:px-28 -mt-24 md:-mt-48 text-lg md:text-xl z-1">
          <h1 className="text-6xl md:text-8xl pageTitle mb-4">Events</h1>
          <p>
            
            Join us at Kreiva-X-Alfaax, a vibrant celebration of culture and literature! Immerse yourself in a whirlwind of creativity and expression as we showcase the best of artistic talent. From strokes of brushes to captivating poetry readings, there's something for everyone. Don't miss out on the diverse range of activities organized by our clubs: Mod5, Shades, Obscura, Pensieve, Encore, Masquerade, Editorial. Mark your calendars for an unforgettable experience!
          </p>
          <br />
          <p>
            Here's the complete list of our events: Flashmob, Nukkad, Jamming, Nrityangana - Duet Dance Competition, Kirdaar - Duo act, Numaish - Nukkad natak, Cinemaghar - Stage play, Crescendo - Solo Music Competition, Nrityangana - Solo Dance Competition, Music Performance, Disney Delight - Art Competition, Pixel Palooza, Pixise - Photography Competition, Open Mic, Kavita Sangram - Poetry Competition.
          </p>
        </div>
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-1 md:gap-20 md:max-w-full gap-4 mx-auto w-3/4 max-w-960 mt-28 hidden md:grid">
          <img src="event1.png" alt="Image 1" className="w-full h-auto" />
          <img src="event2.png" alt="Image 2" className="w-full h-auto" />
          <img src="event3.png" alt="Image 3" className="w-full h-auto" />
          <img src="event4.png" alt="Image 4" className="w-full h-auto" />
          <img src="event5.png" alt="Image 5" className="w-full h-auto" />
          <img src="event6.png" alt="Image 6" className="w-full h-auto" />
        </div>
        <Carousel imageUrls={["event1.png","event2.png","event3.png","event4.png","event5.png","event6.png",]} cnames={["mt-24 z-1"]}/>
        <Plx parallaxData={fluteParallaxData} className="w-full absolute bottom-0 pipudi z-10">
          <img src="pipudi.svg" alt="pipudi" className="h-96 md:h-40 md:hidden mb-12"/>
        </Plx>

        <Plx parallaxData={fluteParallaxDataPC} className="w-full absolute left-0 top-400 pipudi hidden md:block z-10">
          <img src="pipudi.svg" alt="pipudi" className="h-96 md:h-40"/>
        </Plx>
        
      </div>
      <header className="h-64 overflow-hidden" style={{backgroundImage: "linear-gradient(#206569 25%, #FFE8A5 50%)"}}>
        <div className="nav w-1920 mix-blend-multiply" style={{ transform: "translate(0, 0) rotate(-4.5deg)" }}>
          <img
            className="navBack object-left w-full object-cover h-auto"
            src="EventTopFilm.svg"
          />
        </div>
      </header>
    </>
  );
}
