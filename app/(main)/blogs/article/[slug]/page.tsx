import { allDocuments as allDocs } from "@/.contentlayer/generated";
import Blogs from "@/components/blogs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RenderMDX } from "@/lib/render-mdx";
import Image from "next/image";

interface BlogArticleProps {
  params: {
    slug: string;
  };
}

const BlogArticle = ({ params }: BlogArticleProps) => {
  const blog = allDocs.find((doc) => doc._raw.flattenedPath === params.slug);

  return (
    <>
      <div className="flex flex-col pt-32 md:pt-48 px-8">
        <div className="mb-6 md:pl-16">
          <span>home / blogs / article</span>
        </div>
        <div className="mb-4 text-sm font-bold text-neutral-500 md:pl-16">
          <p>Software Engineering Club Blog</p>
        </div>
        <div className="text-4xl md:text-6xl font-bold md:pl-16 mb-12 max-w-md">
          <h1>{blog?.title}</h1>
        </div>
        <div className="w-full">
          <Image
            src={blog?.image}
            alt="blog article image"
            width={1600}
            height={600}
            className="rounded-xl mb-6"
          />
        </div>
        <div className="mb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage />
            <AvatarFallback>QM</AvatarFallback>
          </Avatar>
          <p>Quincy McCants</p>
          <span>{blog?.datePublished}</span>
        </div>
        <div className="text-sm">{blog && <RenderMDX blog={blog} />}</div>
      </div>
      <Blogs />
    </>
  );
};

export default BlogArticle;
