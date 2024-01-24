import Link from "next/link";

interface LinkHubUiProps {
  data: {
    title: string;
    route: string;
  }[];
}

const LinkHubItem = ({ data }: LinkHubUiProps) => {
  return (
    <>
      <div className="flex flex-col">
        {data.map((elem) => (
          <Link
            href={elem.route}
            key={elem.title}
            className="border py-2 px-20 rounded-xl mb-8 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition"
          >
            {elem.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default LinkHubItem;
