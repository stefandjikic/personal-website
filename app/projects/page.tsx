import { Metadata } from "next";
import ProjectCard from "../_components/cards/ProjectCard";
import { PROJECTS_DATA } from "../utils/projects_data";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my personal projects.",
};

const ProjectsPage = () => {
  return (
    <div className="mt-14 ">
      <h1 className="text-3xl text-center font-semibold mb-20 text-cyan-100">
        {PROJECTS_DATA.title}
      </h1>

      {PROJECTS_DATA.projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          projectUrl={project.projectUrl}
          sourceUrl={project.sourceUrl}
          projectImage={project.projectImage}
          githubStats={project?.githubStats}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
