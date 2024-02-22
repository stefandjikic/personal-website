import React from "react";
import linkImg from "@/app/assets/icons/link.svg";
import ghImg from "@/app/assets/icons/gh-fill.svg";
import SocialIcon from "../social/SocialIcon";

interface ProjectCardProps {
  name: string;
  description: string;
  projectUrl: string;
  sourceUrl: string;
}

const ProjectCard = ({
  name = "",
  description = "",
  projectUrl = "",
  sourceUrl = "",
}) => {
  return (
    <section className="bg-slate-950 text-gray-200 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-cyan-100 mb-4">
        {name || "Project Name"}
      </h3>
      <p className="text-lg mb-4">
        {description ||
          "A short description of the project. This could be a summary of the project's goals and the technologies used."}
      </p>
      <div className="flex gap-4">
        <a
          href={projectUrl || "#"}
          rel="noreferrer"
          target="_blank"
          className="text-cyan-100 hover:underline hover:text-cyan-200"
        >
          <SocialIcon href={projectUrl} icon={linkImg} alt="Project Link" />
        </a>
        {sourceUrl && (
          <SocialIcon href={sourceUrl} icon={ghImg} alt="Source Code" />
        )}
        {/* <a
          href={sourceUrl || "#"}
          rel="noreferrer"
          target="_blank"
          className="text-cyan-100 hover:underline hover:text-cyan-200"
        >
          View Source
        </a> */}
      </div>
    </section>
  );
};

export default ProjectCard;
