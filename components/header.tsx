import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="relative space-y-7 flex flex-col items-center mb-20 mt-40 w-full">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/hero-bg.png"
              alt="header background"
              fill
              style={{ objectFit: 'cover' }}
            /> 
          </div>
        <span>Software Engineering Club</span>
        <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">
          Where CS Students of Southwestern College get ahead.
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Where SWC CS students can network, gain hands-on experience, and get
          ahead.
        </h3>
        <div className="flex gap-4">
          <Button>Apply</Button>
          <Button variant="outline">About Us</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
