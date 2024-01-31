"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ClubValuesCardInfo = [
  {
    title: "Skill Development",
    description:
      "Provide members with opportunities to enhance their technical skills through hands-on projects, workshops, and coding challenges.",
    description:
      "Provide members with opportunities to enhance their technical skills through hands-on projects, workshops, and coding challenges.",
  },
  {
    title: "Collaboration and Networking",
    description:
      "Facilitate a platform for students to connect, collaborate, and learn from each other.",
    description:
      "Facilitate a platform for students to connect, collaborate, and learn from each other.",
  },
  {
    title: "Professional Growth",
    description:
      "Provide resources and support for members seeking internships, co-op opportunities, and full-time positions.",
    description:
      "Provide resources and support for members seeking internships, co-op opportunities, and full-time positions.",
  },
  {
    title: "Inclusivity and Diversity",
    description:
      "Foster an environment that welcomes students from all backgrounds, experiences, and skill levels, ensuring that everyone feels valued and supported.",
    description:
      "Foster an environment that welcomes students from all backgrounds, experiences, and skill levels, ensuring that everyone feels valued and supported.",
  },
];

const ClubValuesCard = () => {
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
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1,
          delay: 0.30,
        }}
      >
        {ClubValuesCardInfo.map((member, index) => (
          <div key={index} className="flex flex-col flex-1">
            <div key={index} className="flex justify-between">
              <h2 className="text-2xl mr-64 text-left">{member.title}</h2>
              <p className="w-1/2 text-2xl text-right text-neutral-800 dark:text-neutral-600">
                {member.description}
              </p>
            </div>
            <hr className="border-2 my-36 w-auto"></hr>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClubValuesCard;
