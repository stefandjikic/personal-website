import kulijanaImg from "@/app/assets/images/kulijana.webp";
import medidredImg from "@/app/assets/images/medidred.webp";
import ceImg from "@/app/assets/images/ce-screen.webp";

export const PROJECTS_DATA = {
  title: "Personal Projects",
  description: "Here are some of the personal projects I've worked on.",
  projects: [
    {
      id: 1,
      name: 'Next.js Blog & CMS Template',
      description:
        'A template for creating a blog with a CMS using Next.js and Sanity. The template includes a blog with posts, tags and comments. The CMS is used for managing posts, comments and tags.',
      projectUrl: 'https://next-cms-blog-ce.vercel.app/',
      sourceUrl: 'https://github.com/stefandjikic/next-cms-blog',
      projectImage: 'https://github.com/stefandjikic/next-cms-blog/assets/65912958/2576b109-d592-4321-9870-0db29d769a3e'
    },
    {
      id: 2,
      name: "Kulijana",
      description:
        "A news-like platform where users can read about interseting topics from around the world. The app is built wiht Next.js, GraphQl, Chakra UI and it is powerd by Hygraph CMS. All data, includiing articles, categories and navigation items are managed from the CMS.",
      projectUrl: "https://www.kulijana.rs",
      sourceUrl: "https://github.com/stefandjikic/Kulijana",
      projectImage: kulijanaImg,
    },
    {
      id: 3,
      name: "Med i Dred",
      description:
        "A website with e-commerce solution, created for a YouTube channel that focuses on beekeeping and honey production. The website is built with Next.js, Tailwind and it is powerd by Sanity CMS. The website also utilizes Sanity for managing orders and products on the website.",
      projectUrl: "https://medidred.com",
      sourceUrl: null,
      projectImage: medidredImg,
    },
    {
      id: 4,
      name: "YouTube Channel - Codewalk Empire",
      description:
        "A YouTube channel where I share my knowledge and experience with web development. I create tutorials, code walkthroughs and other content related to web development and programming. Visit the channel to check out the content I've created so far and subscribe if you like it :)",
      projectUrl: "https://www.youtube.com/@codewalkempire",
      sourceUrl: null,
      projectImage: ceImg,
    },
  ],
};
