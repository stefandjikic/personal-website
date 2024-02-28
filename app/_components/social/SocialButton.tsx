import Image, { StaticImageData } from "next/image";
import React from "react";

interface SocialButtonProps {
  title?: string;
  href?: string;
  icon?: string | StaticImageData | null;
}

const SocialButton = ({ title = "", href = "", icon = "" }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="hover:text-cyan-100">
      <div className="backdrop-blur-sm bg-white/5 rounded-lg py-2 px-4 hover:bg-cyan-500/10">
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <p>{title}</p>
      </div>
    </a>
  );
};

export default SocialButton;
