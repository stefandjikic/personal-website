import React from "react";
import Link from "next/link";
import SocialIcon from "../social/SocialIcon";
import { FOOTER_LINKS, SOCIAL_LINKS } from "./footer-links";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t-[0.5px] border-cyan-300/20 relative">
      {/* <div className="absolute h-full -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
      <div className="rotate-180 absolute h-full -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="flex justify-center items-center gap-7 sm:gap-14">
        {FOOTER_LINKS.map((link, index) => (
          <div key={index} className="relative">
            <Link
              // key={index}
              href={link.href}
              aria-disabled={link.disabled}
              tabIndex={link.disabled ? -1 : undefined}
              className={`text-cyan-100/80 text-sm font-thin hover:text-cyan-200 transition duration-200 ${
                link.disabled ? "pointer-events-none" : ""
              } ${link.disabled ? "text-cyan-100/40" : "text-cyan-100/80"}`}
            >
              {link.name}
            </Link>
            {link.disabled && (
              <span className="absolute -right-0 -top-2 sm:-right-10 text-cyan-300/70 text-[8px] sm:text-[9px] font-extralight">
                Coming soon
              </span>
            )}
          </div>
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
        <p className="text-[11px] text-cyan-100/60">
          Thanks for checking out my site! 🚀
        </p>
        <p>
          &copy; {new Date().getFullYear()} Stefan Djikic. Built with Next.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
