"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const handleClick = () => {
    const missionSection = document.getElementById("mission-statement");
    missionSection?.scrollIntoView();
  };

  return (
    <>
      <motion.div
        className="flex flex-col items-center mb-24 mt-40"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <span className="text-base text-neutral-800 dark:text-neutral-400">
          Software Engineering Club
        </span>
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
      </motion.div>
      <div className="!z-0">
        <Image
          src="/hero-bg.png"
          alt="background image"
          className="absolute top-0 left-0 bottom-0 right-0 mt-30"
          fill
        />
      </div>
    </>
  );
};

export default Header;
