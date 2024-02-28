import ln from "@/app/assets/icons/ln.svg";
import gh from "@/app/assets/icons/gh.svg";
import yt from "@/app/assets/icons/yt.svg";

export const FOOTER_LINKS = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Toolbox",
    href: "/toolbox",
    disabled: true,
  },
];

export const SOCIAL_LINKS = [
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