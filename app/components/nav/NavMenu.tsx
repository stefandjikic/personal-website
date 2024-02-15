"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import menuIcon from "@/app/assets/icons/menu.svg";
import menuIconOpen from "@/app/assets/icons/menu-open.svg";
import Link from "next/link";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<any>(null);
  const menuRef = useRef<any>(null);

  const LINKS = [
    {
      name: "Blog",
      href: "/blog",
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

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        !menuButtonRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={menuButtonRef}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="font-semibold text-cyan-100 rounded-md backdrop-blur-sm bg-white/5 p-2"
      >
        <Image
          src={isMenuOpen ? menuIconOpen : menuIcon}
          alt="Menu"
          width={24}
          height={24}
        />
      </button>
      {isMenuOpen && (
        <div
          className="flex flex-col w-48 absolute top-12 right-0 z-10 rounded-md backdrop-blur-sm bg-white/5"
          ref={menuRef}
        >
          {LINKS.map((link) => (
            <Link
              onClick={() => setIsMenuOpen(false)}
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
  );
};

export default NavMenu;
