"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  const handleClick = () => {
    const missionSection = document.getElementById("mission-statement");
    missionSection?.scrollIntoView({ block: "center" });
  };

  return (
    <>
      <div className="relative w-full px-8">
        <div className="!z-50 flex flex-col items-center m-auto mb-40 mt-40 md:mt-60 max-w-3xl">
          <span className="text-base text-neutral-800 dark:text-neutral-400">
            Software Engineering Club
          </span>
          <h1 className="text-4xl md:text-6xl font-bold my-4 tracking-tight leading-tight">
            Where CS Students of Southwestern College get ahead.
          </h1>
          <h3 className="text-lg md:text-xl text-neutral-800 dark:text-neutral-300 font-regular mb-8">
            Where SWC CS students can network, gain hands-on experience, and get
            ahead.
          </h3>
          <div className="flex gap-4">
            <Link href="https://forms.gle/CddHLZ9wbhydApjE9" target="_blank">
              <Button>Apply</Button>
            </Link>

            <Button variant="outline" onClick={handleClick}>
              About Us
            </Button>
          </div>
        </div>
        <div className="!z-0 hidden">
          <Image
            src="/hero-bg.png"
            alt="background image"
            className="absolute top-0 left-0 bottom-0 right-0 mt-30"
            fill
          />
        </div>
      </div>
    </>
  );
};

export default Header;
