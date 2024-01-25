import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blogContent: {
    title: string;
    image: string;
    datePublished: string;
  }[];
}

const BlogCard = ({ blogContent }: BlogCardProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-x-12">
        {blogContent?.map((content) => (
          <Link href="/">
            <div key={content.title} className="flex flex-col mb-12">
              <Image
                src={content.image}
                alt="blog image"
                width={500}
                height={414}
                className="mb-6"
              />
              <div className="text-left">
                <div>
                  <h4 className="text-lg">{content.title}</h4>
                </div>
                <div>
                  <span className="text-sm font-bold text-neutral-500">
                    {content.datePublished}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogCard;
