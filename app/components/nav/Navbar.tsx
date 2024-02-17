import React from "react";
import { Lilita_One } from "next/font/google";
import NavMenu from "./NavMenu";
import Link from "next/link";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className={`${font.className} text-3xl font-bold text-cyan-100`}>
            SD
          </h1>
        </Link>
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
