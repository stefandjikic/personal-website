import React from "react";
import SocialButton from "./SocialButton";

const SocialButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <SocialButton
        title="GitHub"
        href="https://github.com/stefandjikic"
        // icon="/icons/github.svg"
      />
      <SocialButton
        title="LinkedIn"
        href="https://www.linkedin.com/in/stefandjikic/"
        // icon="/icons/linkedin.svg"
      />
      <SocialButton
        title="YouTube"
        href="https://www.youtube.com/@codewalkempire"
        // icon="/icons/youtube.svg"
      />

    </div>
  );
};

export default SocialButtons;
