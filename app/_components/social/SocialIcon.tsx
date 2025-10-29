import React from "react";
import Image, { StaticImageData } from "next/image";

interface SocialIconProps {
  href: string;
  icon: string | StaticImageData;
  alt: string;
}

const SocialIcon = ({ href, icon, alt }: SocialIconProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="backdrop-blur-xs bg-white/5 rounded-lg p-2 hover:bg-cyan-500/10 hover:scale-105 transition duration-150">
        <Image src={icon} alt={alt} width={20} height={20} />
      </div>
    </a>
  );
};

export default SocialIcon;
