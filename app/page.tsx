import Header from "@/components/header";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Mission from "@/components/mission";
import ClubValues from "@/components/clubvalues";


export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Header />
      <Hero />
      <Mission />      
      <Testimonials />
      <ClubValues />
    </div>
  );
}
