import React from "react";
import GradientComponent from "../gradients/GradientComponent";
import Image from "next/image";
import hiIcon from "@/app/assets/icons/hi-y.svg";
import me from "@/app/assets/images/me-2.jpg";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const HeroComponent = () => {
  return (
    <div className="flex justify-between items-center min-h-[400px] mt-10 relative">
      <div>
        <GradientComponent />
        <div className="flex gap-2 items-center">
          <h2 className="text-5xl font-semibold">Hey</h2>
          <Image src={hiIcon} alt="Hi" width={48} height={48} />
        </div>
        <h2 className="text-5xl font-semibold mb-2">
          I&apos;m <span className={` text-cyan-100 font-bold`}>Stefan</span>
        </h2>
        <p className="mt-6 text-2xl ">I&apos;m a software developer.</p>
        <p className="mb-2 text-xl">
          I love building stuff and solving problems.
        </p>
        <p className="mt-6 text-xl">Welcome to my space!</p>
      </div>
      <div className="backdrop-blur-sm bg-white/5 rounded-md relative">
        <GradientComponent />
        <Image
          src={me}
          alt="Stefan Djikic"
          width={240}
          height={240}
          className="rounded-md opacity-90 filter mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
