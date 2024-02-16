import React from "react";
import Image from "next/image";
import ce from "@/app/assets/images/ce.png";

const YouTubeCard = () => {
  return (
    <div className="flex gap-6 items-center h-40 rounded-md backdrop-blur-sm p-4 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l border border-cyan-300/10 hover:border-cyan-300/20 transition duration-200">
      <Image
        src={ce}
        alt="YouTube"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div>
        <h3 className="mb-2 text-cyan-100 text-lg">My YouTube Channel</h3>
        <p>
          Informative and educational videos and tutorials about web development
          and programming.
        </p>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default YouTubeCard;
