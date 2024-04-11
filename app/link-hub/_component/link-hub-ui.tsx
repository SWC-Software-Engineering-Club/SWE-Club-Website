import Logo from "@/components/ui/logo";
import LinkHubItem from "./link-hub-item";
import { ChevronDown, Instagram, Linkedin, MessageCircleCode, MousePointer2, UserPlus } from "lucide-react";


const linkData = [
  {
    title: "Club Website",
    route: "/",
    icon: MousePointer2
  },
  {
    title: "Join the club",
    route: "https://forms.gle/CddHLZ9wbhydApjE9",
    icon: UserPlus
  },
  {
    title: "Discord",
    route: "https://discord.gg/A3quvX5Q",
    icon: MessageCircleCode
  },
  // {
  //   title: "Instagram",
  //   route: "/",
  //   icon: Instagram
  // },
  // {
  //   title: "LinkedIn",
  //   route: "/",
  //   icon: Linkedin
  // },
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
