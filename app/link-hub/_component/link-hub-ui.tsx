import Logo from "@/components/ui/logo";
import LinkHubItem from "./link-hub-item";

const linkData = [
  {
    title: "Club Website",
    route: "/",
  },
  {
    title: "Join the club",
    route: "/signup",
  },
  {
    title: "Instagram",
    route: "/",
  },
  {
    title: "LinkedIn",
    route: "/",
  },
];

const LinkHubUi = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div>
        <Logo altText="Logo" className="w-20 h-20" />
      </div>
      <div>
        <h1 className="mb-6 font-bold text-neutral-500">
          Southwestern College <br />
          Software Engineering Club
        </h1>
      </div>
      <div>
        <LinkHubItem data={linkData} />
      </div>
    </div>
  );
};

export default LinkHubUi;
