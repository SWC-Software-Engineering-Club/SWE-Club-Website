import Image from "next/image";

const FooterLinks = [
  {
    title: "Club Directory",
    link: "/club-directory",
  },
  {
    title: "Sponsors us",
    link: "/",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Join the club",
    link: "/signup",
  },
];

const FooterSocials = [
  {
    title: "Linkedin",
    link: "/",
  },
  {
    title: "Instagram",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="relative p-8">
      <div className="flex flex-col !z-50">
        <div className="pb-8">
          <span className="font-bold text-neutral-600 dark:text-neutral-500">
            SOUTHWESTERN COLLEGE
          </span>
        </div>
        <div>
          <h2 className="text-5xl max-w-md font-bold pb-6">
            Software Engineering Club
          </h2>
        </div>
        <div>
          <p className="text-xl max-w-xl pb-6">
            Where CS Students of Southwestern College can get ahead by gaining
            real world experience.
          </p>
        </div>
        <div className="flex pb-24">
          <div className="flex flex-col gap-y-4">
            {FooterLinks.map((link) => (
              <a key={link.title} href={link.link} className="pr-4 font-semibold text-neutral-800 dark:text-neutral-200">
                {link.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-y-4 ml-24">
            {FooterSocials.map((link) => (
              <a key={link.title} href={link.link} className="font-semibold text-neutral-800 dark:text-neutral-200">
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <span>
          © {new Date().getFullYear()} Southwestern College Software Engineering
          Club. All rights reserved.
        </span>
      </div>

      <Image
        src="/bg-gradient-dark.png"
        alt="background gradient"
        width={2000}
        height={2000}
        className="absolute bottom-0 left-0 right-0"
        style={{ zIndex: -1 }}
      />
    </footer>
  );
};
export default Footer;
