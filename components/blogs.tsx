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
  return (
    <div className="p-8 pt-28 gap-y-6 flex flex-col w-full mb-20">
      <div className="mt-12 text-sm font-extrabold text-neutral-500"></div>
      <div>
        <h3 className="text-3xl text-left">Latest blogs</h3>
      </div>
      <div className="mt-8">
        <BlogCard blogContent={BlogContent} />
      </div>
      <div className="flex items-center justify-center">
        <Button variant="outline">more</Button>
      </div>
    </div>
  );
}
