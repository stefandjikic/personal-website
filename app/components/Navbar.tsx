"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Lilita_One } from "next/font/google";
import menuIcon from "@/app/assets/icons/menu.svg";
import menuIconOpen from "@/app/assets/icons/menu-open.svg";
import Image from "next/image";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const LINKS = [
    {
      name: "Blog",
      href: "/",
    },
    {
      name: "Work",
      href: "/",
    },
    {
      name: "Projects",
      href: "/",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center">
        <h1 className={`${font.className} text-3xl font-bold text-cyan-100`}>
          SD
        </h1>

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="font-semibold text-cyan-100 rounded-md backdrop-blur-sm bg-white/5 p-2"
          >
            <Image src={isMenuOpen ? menuIconOpen : menuIcon } alt="Menu" width={24} height={24} />
          </button>
          {isMenuOpen && (
            <div className="flex flex-col w-48 absolute top-12  right-0 z-10 rounded-md backdrop-blur-sm bg-white/5">
              {LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-semibold p-3 hover:bg-slate-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
