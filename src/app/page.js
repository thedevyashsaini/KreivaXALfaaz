import LandingPage from "./_components/landingPage";
import PeepShow from "./_components/ui/peepShow";
import AboutUs from "./_components/AboutUs";
import Gallery from "./_components/Gallery";

export default function Home() {
  return (
    <div>
     <LandingPage />
      <AboutUs /> 
      {/* <PeepShow />  */}
      <Gallery />
    </div>
    
  );
}