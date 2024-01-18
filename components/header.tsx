"use client";
import { Button } from "./ui/button";

const Header = () => {
  const handleClick = () => {
    const missionSection = document.getElementById("mission-statement");
    missionSection?.scrollIntoView();
  };

  return (
    <div className="flex flex-col items-center mb-24 mt-40">
      <span>Software Engineering Club</span>
      <h1 className="text-5xl font-bold my-6 w-auto">
        Where CS Students of Southwestern College get ahead.
      </h1>
      <h3 className="text-xl font-regular">
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
