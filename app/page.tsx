import Header from "@/components/header";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";


export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Header />
      <Hero />
      <Testimonials />
    </div>
  );
}
