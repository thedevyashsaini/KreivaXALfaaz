"use client";
import "./aboutus.css";
import EventPage from "./eventPage";
import "./landingPage.css";
import Plx from "react-plx";
import Image from 'next/image'
import EventTopFilm from "../../../public/EventTopFilm.svg"
import comp5 from "../../../public/component5.svg"
import drums from "../../../public/drums.svg"
import piano from "../../../public/piano.svg"

export default function AboutUs() {
  const trumpetParallaxData = [
    {
      start: "self",
      duration: 600,
      properties: [
        {
          startValue: 0.5,
          endValue: 1.5,
          property: "scale",
        },
      ],
    },
  ];

  const pianoParallaxData = [
    {
      start: "self",
      duration: 300,
      properties: [
        {
          startValue: 0.5,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
        },
      ],
    },
  ];

  const tablaParallaxtaData = [
    {
      start: "self",
      duration: 300,
      properties: [
        {
          startValue: 0.5,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: -100,
          endValue: -40,
          property: "translateX",
        },
      ],
    },
  ];

  return (
    <>
      <div className="aboutus relative min-h-screen custom-scrollbar overflow-x-hidden overflow-y-hidden md:min-h-69">
        <header className="mix-blend-multiply relative z-10">
          <div
            className="nav w-1920"
            style={{ transform: "translate(0, -70px) rotate(-4.5deg)" }}
          >
            <Image
              height={1080}
              width={1920}
              className="navBack object-left w-full object-cover h-auto"
              src={EventTopFilm}
              alt={"Top film"}
            />
          </div>
        </header>
        <Plx className="trumpetimg z-10" parallaxData={trumpetParallaxData}>
          <Image height={300} width={300} src={comp5} alt="" className="" />
        </Plx>
        <div className="max-w-4xl mx-auto text-orange-900 px-6 aboutustext relative z-1">
          <div className="text-6xl font-semibold mb-6 pageTitle">About Us</div>
          <div className="grid grid-cols-1 oldenburg-regular sposnorflex">
            <div className="col-span-6 flex flex-col gap-6 text-center text-md">
              <div>
                Kreiva is the annual cultural festival of Indian Institute of
                Information Technology, Vadodara. Kreiva serves as a platform
                for students to show their talents in performing arts and
                aesthetic arts, where students can collaborate and team up with
                other students to bring out the best in them in a Plethora of
                Events.
              </div>
              <div>
                Alfaaz, the annual literature fest of IIIT Vadodara, is a
                vibrant celebration of words and creativity. This one-day
                extravaganza transforms the campus into a haven for bookworms,
                wordsmiths, and artistic minds. Dive into poetry slams, ignite
                your mind with debates, unleash your storytelling prowess, and
                witness mesmerizing performances. Beyond entertainment, Alfaaz
                fosters a love for literature, encourages intellectual
                discourse, and builds community.
              </div>
              <div>
                Join us to celebrate creativity, join us, to celebrate Kreiva!
              </div>
            </div>
          </div>
        </div>
        <Plx className="drumsimg z-50" parallaxData={tablaParallaxtaData}>
          <Image width={1920} height={1080} src={"/drums.svg"} alt="drums" />
        </Plx>
        <Plx parallaxData={pianoParallaxData} className="pianoimg z-1">
          {" "}
          <Image width={1000} height={1000} src={"/piano.svg"}  alt="piano" />
        </Plx>
      </div>
      <EventPage />
    </>
  );
}
