import React from "react";
import AboutCard from "./about/AboutCard";
import WorkCard from "./about/WorkCard";
import ToolboxCard from "./about/ToolboxCard";
import YouTubeCard from "./about/YouTubeCard";

const AboutSection = () => {
  return (
    <div className="my-10">
      <h3 className="text-xl uppercase text-cyan-100 text-center mb-10">
        About
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
        <div className="row-span-2 col-span-2 sm:col-span-1">
          <AboutCard />
        </div>
        <WorkCard />
        <ToolboxCard />
        <div className="col-start-1 col-end-3">
          <YouTubeCard />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
