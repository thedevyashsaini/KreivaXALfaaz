import LandingPage from "./_components/landingPage";
// import { ThreeDCardDemo } from "./_components/ui/tryingout";
import AboutUs from "./_components/AboutUs";
import Gallery from "./_components/Gallery";

export const dynamic = "force-static"

export default function Home() {
  return (
    <div>
     <LandingPage />
      <AboutUs /> 
      <Gallery />
      {/* <ThreeDCardDemo /> */}
    </div>
    
  );
}
