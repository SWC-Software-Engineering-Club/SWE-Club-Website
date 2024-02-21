"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ClubValuesCard from "./clubvalues-card";

const ClubValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="max-w-screen-lg" style={{ maxWidth: "2200px" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1,
          delay: 0.25,
        }}
      >
        <h1 className="my-24 text-3xl font-medium text-left">Club Values</h1>
      </motion.div>
      
      <ClubValuesCard />
    </div>
  );
};

export default ClubValues;
