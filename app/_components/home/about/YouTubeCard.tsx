import React from "react";
import Image from "next/image";
import ce from "@/app/assets/images/ce.png";

const YouTubeCard = () => {
  return (
    <a
      href="https://www.youtube.com/@codewalkempire"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex gap-6 items-center h-auto sm:h-40 rounded-md backdrop-blur-sm p-4 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l group border border-cyan-300/10 hover:border-cyan-300/20 transition duration-200">
        <Image
          src={ce}
          alt="YouTube"
          width={100}
          height={100}
          className="rounded-full group-hover:scale-105 transition duration-200"
        />
        <div>
          <h3 className="mb-2 text-cyan-100 text-lg">Follow me on YouTube</h3>

          <p className=" text-cyan-100/70 font-light text-sm sm:text-base">
            A place where I share my knowledge with the world through videos and
            tutorials about web development and programming.
          </p>
        </div>
      </div>
    </a>
  );
};

export default YouTubeCard;
