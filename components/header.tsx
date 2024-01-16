"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  const handleClick = () => {
    const missionSection = document.getElementById("mission-statement");
    missionSection?.scrollIntoView();
  };

  return (
    <div className="max-w-3xl space-y-7 flex flex-col items-center mb-28 mt-40">
      <span>Software Engineering Club</span>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Where CS Students of Southwestern College get ahead.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
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
