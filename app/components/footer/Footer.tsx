import React from "react";
import Link from "next/link";
import ln from "@/app/assets/icons/ln.svg";
import gh from "@/app/assets/icons/gh.svg";
import yt from "@/app/assets/icons/yt.svg";
import SocialIcon from "../social/SocialIcon";

const LINKS = [
  {
    name: "Work",
    href: "/",
  },
  {
    name: "Projects",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Toolbox",
    href: "/",
  },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/stefandjikic",
    icon: gh,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/stefandjikic/",
    icon: ln,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@codewalkempire",
    icon: yt,
  },
];

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t-[0.5px] border-cyan-300/20 relative">
      {/* <div className="absolute h-full -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
      <div className="rotate-180 absolute h-full -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="flex justify-center items-center gap-14">
        {LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-cyan-100/80 text-sm font-thin hover:text-cyan-200 transition duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        {SOCIAL_LINKS.map((link, index) => (
          <SocialIcon
            key={index}
            href={link.href}
            icon={link.icon}
            alt={link.name}
          />
        ))}
      </div>

      <div className="mt-10 text-center text-xs  font-thin text-cyan-100/50">
        <p className="text-[11px] text-cyan-100/60">Thanks for checking out my site! 🚀</p>
        <p>
          &copy; {new Date().getFullYear()} Stefan Djikic. Built with Next.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
