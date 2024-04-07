import Image from "next/image";
import LandingPage from "./_components/landingPage";
import PeepShow from "./_components/ui/peepShow";
import AboutUs from "./_components/AboutUs";
// import Patri from "./_components/motivation";
export default function Home() {
  return (
    <div>
      <LandingPage />
      <AboutUs />
      <PeepShow />
    </div>
    
  );
}
