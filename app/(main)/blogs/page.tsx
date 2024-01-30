import BlogCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";

// in this file well need to request for all MDX docs and map them into the blogs component

export default function Blogs() {
  return (
    <div className="p-8 pt-28 gap-y-6 flex flex-col">
      <div className="mt-12 text-sm font-extrabold text-neutral-500">
        Home / Blog
      </div>
      <div>
        <h3 className="text-3xl">Latest blogs</h3>
      </div>
      <div className="mt-8 flex gap-x-12">
        <BlogCard />
      </div>
      <div className="flex items-center justify-center pt-12">
        <Button variant="outline">more</Button>
      </div>
    </div>
  );
}
