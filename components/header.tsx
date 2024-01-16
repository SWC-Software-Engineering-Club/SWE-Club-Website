import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="max-w-full h-full space-y-7 flex flex-col items-center mb-28 mt-24 relative">
          <Image
            src="/hero-bg.png"
            alt="black background"
            layout="fill"
            className="absolute inset-0"
            objectFit="cover"
          />

          <span>Software Engineering Club</span>
          <div className="flex flex-col items-center justify-center z-50 gap-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
              Where CS Students of Southwestern College get ahead.
            </h1>

            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
              Where SWC CS students can network, gain hands-on experience, and
              get ahead.
            </h3>

            <div className="flex gap-4">
              <Button>Apply</Button>
              <Button variant="outline">About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
