import Header from "@/components/header";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Mission from "@/components/mission";
import ClubValues from "@/components/clubvalues";
import Blogs from "@/components/blogs";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Header />
      <Hero />
      <Mission />
      <ClubValues />
      <Testimonials />
      <Blogs />
    </div>
  );
}
