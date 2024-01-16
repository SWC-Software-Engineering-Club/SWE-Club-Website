import BlogCard from "@/components/blog-card";

// in this file well need to request for all MDX docs and map them into the blogs component
export default function Blogs() {
  return (
    <div className="p-8 pt-28 flex flex-col">
      <div>Home / Blog</div>
      <div>
        <h3>Latest blogs</h3>
      </div>
      <div>
        <BlogCard />
      </div>
    </div>
  );
}
