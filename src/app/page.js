import Image from "next/image";
import LandingPage from "./_components/landingPage";
import AboutUs from "./_components/AboutUs";
// import Patri from "./_components/motivation";
export default function Home() {
  return (
    <div>
      <LandingPage />
      <AboutUs />
    </div>
    
  );
}
