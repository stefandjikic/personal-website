import React from "react";

const ProjectCardGradient = () => {
  return (
    <div className="absolute opacity-50 group-hover:opacity-100 transition duration-200 top-[5%] left-[-10%] before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] dark:before:bg-linear-to-br dark:before:from-transparent dark:before:to-blue-700 dark:before:opacity-10 dark:after:from-sky-900 dark:after:via-[#0141ff] dark:after:opacity-40 lg:before:h-[360px] z-[-1]"></div>
  );
};

export default ProjectCardGradient;
