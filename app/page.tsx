import Header from "@/components/header";
import Hero from "@/components/hero";
import Mission from "@/components/Mission";


export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Header />
      <Hero />
      <Mission />
    </div>
  );
}
