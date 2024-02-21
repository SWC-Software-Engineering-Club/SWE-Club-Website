"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import TestimonialsCard from "./testimonials-card";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="flex flex-col m-16">
      <div ref={ref} className="p-12">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        >
          <h3 className="text-3xl font-medium">Club Testimonials</h3>
        </motion.div>
      </div>
      <div ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 1,
            delay: 0.45,
          }}
        >
          <TestimonialsCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
