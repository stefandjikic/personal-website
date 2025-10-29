import React from "react";
import Image from "next/image";
import Link from "next/link";
import document from "@/app/assets/icons/document.svg";

const WorkCard = () => {
  return (
    <Link href="/work">
      <div className="flex flex-col justify-center items-center gap-4 h-40 rounded-md backdrop-blur-xs p-4 bg-linear-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-linear-to-l border border-cyan-300/10 hover:border-cyan-300/20 group transition duration-200">
        <Image
          src={document}
          alt="Work"
          width={75}
          height={75}
          className="scale-100 group-hover:scale-110 translate-y-0 group-hover:translate-y-1 transition duration-200"
        />
        <h3 className="text-cyan-100 translate-y-0 group-hover:-translate-y-1 transition duration-300">
          Work
        </h3>
      </div>
    </Link>
  );
};

export default WorkCard;
