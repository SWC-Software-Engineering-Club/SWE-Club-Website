"use client";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  const handleClick = () => {
    const missionSection = document.getElementById("mission-statement");
    missionSection?.scrollIntoView();
  };

  return (
    <div className="flex flex-col items-center mb-24 mt-40">
      <span className="text-base text-neutral-800 dark:text-neutral-400">Software Engineering Club</span>
      <h1 className="text-6xl font-bold my-4 w-1/2 tracking-tight leading-tight">
        Where CS Students of Southwestern College get ahead.
      </h1>
      <h3 className="text-xl text-neutral-800 dark:text-neutral-300 font-regular mb-8 w-1/3">
        Where SWC CS students can network, gain hands-on experience, and get
        ahead.
      </h3>
      <div className="flex gap-4">
        <Button>Apply</Button>

        <Button variant="outline" onClick={handleClick}>
          About Us
        </Button>
      </div>
    </div>
  );
};

export default Header;
