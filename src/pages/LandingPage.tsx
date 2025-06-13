import Navbar from "../component/LandingPage/Navbar";
import HeroOne from "../component/LandingPage/HeroOne";

export default function LandingPage() {
  return (
    <div className="flex flex-col space-y-10 bg-black min-h-screen text-yellow items-center">
      {/* Navbar */}
      <Navbar />
      <HeroOne/>

    </div>
  );
}
