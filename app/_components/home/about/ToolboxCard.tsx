import React from "react";
import Image from "next/image";
import toolbox from "@/app/assets/icons/tools.svg";

const ToolboxCard = () => {
  return (
    <div className="relative overflow-hidden h-40 flex flex-col justify-center items-center gap-4 rounded-md backdrop-blur-sm p-4 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l border border-cyan-300/10 hover:border-cyan-300/20 group transition duration-200">
      <div className="w-[80px] h-[80px] p-4 rounded-full border-[0.5px] scale-100 border-cyan-300/50 group-hover:border-cyan-300 group-hover:scale-110 translate-y-0 group-hover:translate-y-1 transition duration-200">
        <Image src={toolbox} alt="Toolbox" width={70} height={70} />
      </div>
      <h3 className="text-cyan-100 translate-y-0 group-hover:-translate-y-1 transition duration-300">
        Toolbox
      </h3>
      <p className="absolute top-14 sm:top-2 right-1 sm:right-2 text-[8px] sm:text-[10px] text-cyan-300/70 p-1 sm:p-2 rounded-md border border-cyan-300/20 -translate-y-12 group-hover:translate-y-0 transition duration-300 ">
        Comming soon!
      </p>
    </div>
  );
};

export default ToolboxCard;
