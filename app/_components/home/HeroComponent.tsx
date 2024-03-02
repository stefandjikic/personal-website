import React from "react";
import GradientComponent from "../gradients/GradientComponent";
import Image from "next/image";
import hiIcon from "@/app/assets/icons/hi-y.svg";
import me from "@/app/assets/images/me-4.jpg";
import { Lilita_One } from "next/font/google";
import SocialButtons from "../social/SocialButtons";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const HeroComponent = () => {
  return (
    // min-h-[54vh] mt-10
    <div className="flex flex-col md:flex-row gap-6 justify-between items-center min-h-[44vh] mt-20 relative">
      <div>
        <GradientComponent />
        <div className="flex gap-2 items-center">
          <h2 className="text-4xl sm:text-5xl font-semibold">Hey</h2>
          <Image src={hiIcon} alt="Hi" width={48} height={48} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold mb-2">
          I&apos;m <span className={` text-cyan-100 font-bold`}>Stefan</span>
        </h2>
        <p className="mt-6 text-2xl sm:text-3xl ">I&apos;m a software developer.</p>
        <p className="mb-2 text-xl sm:text-2xl">
          I love building stuff and solving problems.
        </p>
        <p className="mt-6 text-lg sm:text-2xl my-4 mb-10">Welcome to my space!</p>
        <SocialButtons />
      </div>
      <div className="backdrop-blur-sm bg-white/5 rounded-md relative ">
        <GradientComponent />
        <div className="rounded-md bg-gradient-to-r from-indigo-600 to-cyan-800">
          <Image
            src={me}
            alt="Stefan Djikic"
            width={280}
            height={280}
            // className="rounded-md opacity-90 filter mix-blend-multiply"
            className="relative rounded-md opacity-70 border-cyan-700  border-[0.5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
