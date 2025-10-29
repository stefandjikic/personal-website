import React from "react";
import Image from "next/image";
import us from "@/app/assets/images/us.jpg";
import moonlight from "@/app/assets/images/moonlight.svg";
import Link from "next/link";

const AboutCard = () => {
  return (
    <Link href="/about">
      <div className="h-full overflow-hidden flex flex-col gap-10 justify-end items-center rounded-md backdrop-blur-xs p-4 group bg-linear-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-linear-to-l border border-cyan-300/10 hover:border-cyan-300/20 transition duration-300">
        <h3 className="text-cyan-100  sm:absolute relative -bottom-5 group-hover:-translate-y-60 transition duration-300">
          Learn more about me
        </h3>
        <Image
          src={moonlight}
          alt="Moonlight"
          className="translate-y-[17px] transition duration-300"
        />
      </div>
    </Link>
  );
};

// const AboutCard = () => {
//   return (
//     <div className="relative rounded-md h-full border border-cyan-300/20 hover:border-cyan-300/40 group transition duration-200">
//       <Image src={us} alt="Us" className="rounded-md h-full w-full" />
//       <div className="absolute flex  items-end bottom-0 left-0 w-full h-full rounded-md p-4 bg-linear-to-t from-indigo-950 via-indigo-950/50 to-sky-500/30 to-80% group-hover:to-90%">
//         <h3 className="text-cyan-100 group-hover:-translate-y-2 transition duration-200">
//           Learn more about me
//         </h3>
//       </div>
//     </div>
//   );
// };

export default AboutCard;
