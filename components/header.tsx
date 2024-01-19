"use client";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="max-w-full h-full space-y-7 flex flex-col items-center mb-28 mt-24 relative">
          {/* Background Image Styling */}
          <div className="absolute inset-0 bg-cover">
            <Image
              src="/hero-bg.png"
              alt="black background"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Text Box Content */}
          <div className="flex flex-col items-center justify-center z-50 gap-y-6 mt-[50rem]">
            <span>Software Engineering Club</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-12 w-[46rem]">
              Where CS Students of Southwestern College get ahead.
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium w-[34rem]">
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
