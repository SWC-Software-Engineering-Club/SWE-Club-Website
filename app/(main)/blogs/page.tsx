import BlogCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";

// in this file well need to request for all MDX docs and map them into the blogs component

// dummy blog content
const BlogContent = [
  {
    id: 1,
    title: "How to stand out as CS major",
    image: "/blog-image-1.png",
    datePublished: "Dec 23, 2023"
  },
  {
    id: 2,
    title: "How to stand out as CS major",
    image: "/blog-image-1.png",
    datePublished: "Dec 23, 2023"
  },
]
export default function Blogs() {
  return (
    <div className="p-8 pt-28 gap-y-6 flex flex-col">
      <div className="mt-12 text-sm font-extrabold text-neutral-500">Home / Blog</div>
      <div>
        <h3 className="text-3xl">Latest blogs</h3>
      </div>
      <div className="mt-8 flex gap-x-12">
        <BlogCard blogContent={BlogContent}/>
      </div>
      <div className="flex items-center justify-center pt-12">
        <Button variant="outline">
          more
        </Button>
      </div>
    </div>
  );
}
