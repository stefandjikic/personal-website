import React from "react";
import Link from "next/link";
import { Lilita_One } from "next/font/google";
import menuIcon from "@/app/assets/icons/menu.svg";
import Image from "next/image";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center">
        <h1 className={`${font.className} text-3xl font-bold text-cyan-100`}>
          SD
        </h1>
        <button className="font-semibold text-cyan-100 rounded-md backdrop-blur-sm bg-white/5 p-2">
          <Image src={menuIcon} alt="Menu" width={24} height={24} />
        </button>
        {/* <div className={`flex gap-4`}>
          <Link className="font-semibold" href="/">
            Blog
          </Link>
          <Link className="font-semibold" href="/">
            Work
          </Link>

          <Link className="font-semibold" href="/">
            Projects
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
