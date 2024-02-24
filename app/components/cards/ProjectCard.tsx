import React from "react";
import Image, { StaticImageData } from "next/image";
import SocialIcon from "../social/SocialIcon";
import linkImg from "@/app/assets/icons/link.svg";
import ghImg from "@/app/assets/icons/gh-fill.svg";

interface ProjectCardProps {
  name: string;
  description: string;
  projectUrl: string;
  sourceUrl: string | null;
  projectImage: string | StaticImageData;
}

const ProjectCard = ({
  name = "",
  description = "",
  projectUrl = "",
  sourceUrl = "",
  projectImage,
}: ProjectCardProps) => {
  return (
    <section className="text-gray-200 mb-20">
      <div className="flex flex-col md:flex-row gap-10 sm:gap-20 items-center justify-between">
        <div>
          {" "}
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
          </div>
        </div>
        <div className="roudned-md relative ">
          {/* <div className="absolute w-full h-full rounded-md bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l transition duration-300"></div> */}
          <Image
            src={projectImage || "/images/placeholder.png"}
            alt="Project Image"
            className="rounded-md max-w-[360px]"
            width={360}
            height={260}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
