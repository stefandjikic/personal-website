import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Links",
  description: "All my links in one place.",
};

const LINKS = [
  {
    label: "YouTube",
    description: "Programming tutorials and tech content",
    href: "https://www.youtube.com/@codewalkempire",
    icon: "/icons/youtube.svg",
    id: "codewalkempire",
  },
  {
    label: "YouTube",
    description: "Motorcycle vlogs and adventures",
    href: "https://www.youtube.com/@stefandjikic",
    icon: "/icons/youtube.svg",
    id: "stefandjikic_yt",
  },
  {
    label: "Instagram",
    description: "Life and personal updates",
    href: "https://www.instagram.com/djika0/",
    icon: "/icons/instagram.svg",
    id: "instagram",
  },
  {
    label: "GitHub",
    description: "Open source projects and code",
    href: "https://github.com/stefandjikic",
    icon: "/icons/github.svg",
    id: "github",
  },
  {
    label: "Website",
    description: "Blog, projects and more",
    href: "https://stefandjikic.com",
    icon: null,
    id: "website",
  },
];

const LinksPage = () => {
  return (
    <div className="my-14 max-w-lg mx-auto px-4">
      <h1 className="text-3xl text-center font-semibold mb-4 text-cyan-100">
        Stefan Djikic
      </h1>
      <p className="text-center text-gray-400 mb-16">
        Software engineer · Content creator
      </p>

      <div className="flex flex-col gap-4">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-100/20 transition-all duration-200 group"
          >
            <span className="w-8 flex items-center justify-center shrink-0">
              {link.icon ? (
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                />
              ) : (
                <span className="text-2xl text-cyan-100">◉</span>
              )}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-100 group-hover:text-cyan-100 transition-colors">
                {link.label}
              </div>
              <div className="text-sm text-gray-400 truncate">
                {link.description}
              </div>
            </div>
            <span className="text-gray-500 group-hover:text-cyan-100 transition-colors shrink-0">
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
