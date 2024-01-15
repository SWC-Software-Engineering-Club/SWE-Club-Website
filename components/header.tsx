import { Button } from "./ui/button";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black opacity-50">
        <div className="relative hero-content">
          <Image
            src="/hero-bg.png"
            alt="black background"
            //layout="fill"
            className="absolute inset-0 w-full h-full"
            width={4000}
            height={2000}
            objectFit="cover"
          />
        </div>
      </div>

      <div className="max-w-3xl space-y-7 flex flex-col items-center mb-28 mt-40">
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
