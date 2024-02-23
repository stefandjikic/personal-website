import kulijanaImg from "@/app/assets/images/kulijana.webp";
import medidredImg from "@/app/assets/images/medidred.webp";

export const PROJECTS_DATA = {
  title: "Projects",
  description: "Here are some of the personal projects I've worked on.",
  projects: [
    {
      id: 1,
      name: "Kulijana",
      description:
        "A news-like platform where users can read about interseting topics from around the world. The app is built wiht Next.js, GraphQl, Chakra UI and it is powerd by Hygraph CMS. All data, includiing articles, categories and navigation items are managed from the CMS.",
      projectUrl: "https://www.kulijana.rs",
      sourceUrl: "https://github.com/stefandjikic/Kulijana",
      projectImage: kulijanaImg,
    },
    {
      id: 2,
      name: "Med i Dred",
      description:
        "A website with e-commerce solution, created for a YouTube channel that focuses on beekeeping and honey production. The website is built with Next.js, Tailwind and it is powerd by Sanity CMS. The website also utilizes Sanity for managing orders and products on the website.",
      projectUrl: "https://medidred.com",
      sourceUrl: null,
      projectImage: medidredImg,
    },
  ],
};
