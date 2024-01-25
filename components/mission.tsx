"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col items-center mb-24 mt-40"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1,
          delay: 0.30
        }}
      >
        <div
          ref={ref}
          id="mission-statement"
          className="flex flex-col items-center mt-10 mb-10 relative"
        >
          <img
            src="/icon-light.svg"
            alt="Mission Icon"
            className="absolute hidden dark:block"
          />
          <img
            src="/icon-dark.svg"
            alt="Mission Icon"
            className="absolute dark:hidden"
          />
          <div className="max-w-3xl space-y-8 flex flex-col items-center mt-20 mb-10">
            <h3 className="text-4xl font-bold">Our Mission</h3>
            <p className="text-neutral-800 sm:text-xl md:text-1xl font-small mb-4 dark:text-neutral-600">
              SWE Club's mission is to foster a vibrant and inclusive community
              for computer science enthusiasts, providing opportunities to
              collaborate, learn, and gain practical experience in building
              real-world applications. Through a fun and friendly environment,
              we aim to empower our members to excel in the competitive field of
              computer science.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;
