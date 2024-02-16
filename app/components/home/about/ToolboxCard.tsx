import React from "react";
import Image from "next/image";
import toolbox from "@/app/assets/icons/tools.svg";

const ToolboxCard = () => {
  return (
    <div className="h-40 flex flex-col justify-center items-center gap-4 rounded-md backdrop-blur-sm p-4 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l border border-cyan-300/10 hover:border-cyan-300/20 group transition duration-200">
      <div className="w-[80px] h-[80px] p-4 rounded-full border-[0.5px] scale-100 border-cyan-300/50 group-hover:border-cyan-300 group-hover:scale-110 translate-y-0 group-hover:translate-y-1 transition duration-200">
        <Image src={toolbox} alt="Toolbox" width={70} height={70} />
      </div>
      <p className="translate-y-0 group-hover:-translate-y-1 transition duration-300">
        Toolbox
      </p>
    </div>
  );
};

export default ToolboxCard;
