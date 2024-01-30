import BlogCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";

export default function Blogs() {
  return (
    <div className="p-8 pt-28 gap-y-6 flex flex-col w-full mb-20">
      <div className="mt-12 text-sm font-extrabold text-neutral-500"></div>
      <div>
        <h3 className="text-3xl text-left">Latest blogs</h3>
      </div>
      <div className="mt-8">
        <BlogCard />
      </div>
      <div className="flex items-center justify-center">
        <Button variant="outline">more</Button>
      </div>
    </div>
  );
}
