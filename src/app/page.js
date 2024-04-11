import Image from "next/image";
import LandingPage from "./_components/landingPage";
import PeepShow from "./_components/ui/peepShow";
import AboutUs from "./_components/AboutUs";
import EventPage from "./_components/eventPage";
import Gallery from "./_components/Gallery";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
     <LandingPage />
      <AboutUs /> 
      <PeepShow /> 
      <Gallery />
    </div>
    
  );
}