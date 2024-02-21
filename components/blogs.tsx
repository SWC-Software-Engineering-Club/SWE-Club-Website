"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import BlogCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";

// Dummy blog content
const BlogContent = [
  {
    id: 1,
    title: "How to stand out as a CS major",
    image: "/blog-image-1.png",
    datePublished: "Dec 23, 2023",
  },
  {
    id: 2,
    title: "How to stand out as CS major",
    image: "/blog-image-1.png",
    datePublished: "Dec 23, 2023",
  },
];

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="p-8 pt-28 gap-y-6 flex flex-col">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <div className="mt-12 text-sm font-extrabold text-neutral-500"></div>
        <div ref={ref}>
          <h3 className="text-3xl">Latest blogs</h3>
        </div>
        <div className="mt-8 flex gap-x-12">
          <BlogCard blogContent={BlogContent} />
        </div>
        <div className="flex items-center justify-center pt-12">
          <Button variant="outline">more</Button>
        </div>
      </motion.div>
    </div>
  );
}
