import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LinkHubUiProps {
  data: {
    title: string;
    route: string;
    icon: LucideIcon;
  }[];
}

const LinkHubItem = ({ data }: LinkHubUiProps) => {
  return (
    <>
      <div className="relative flex flex-col">
        {data.map((elem) => (
          <Link
            href={elem.route}
            key={elem.title}
            target="_blank"
            className="border py-3 px-24 rounded-2xl mb-8 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition"
          >
            <div className="absolute left-0 ml-5 text-sm">{elem.icon && React.createElement(elem.icon)}</div>

            {elem.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default LinkHubItem;
