import React from "react";
import ProjectCard from "../components/cards/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="mt-14 ">
      <h1 className="text-3xl text-center font-semibold mb-16 text-cyan-100">
        Projects
      </h1>
      <ProjectCard
        name="Project Name"
        description="A short description of the project. This could be a summary of the project's goals and the technologies used."
        projectUrl="#"
        sourceUrl="#"
      />
    </div>
  );
};

export default ProjectsPage;
