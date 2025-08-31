"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Intelligent Collaborative Video Player",
    desc: "Built an enterprise video collaboration platform for synchronized playback and AI insights using MERN stack, Socket.IO, and microservices.",
    link: "https://github.com/rohanshr135/Intelligent-Collaborative-Video-Player",
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Company Grow",
    desc: "Developed a workforce platform for training, smart project allocation, and performance rewards using MERN stack and REST APIs.",
    link: "https://github.com/rohanshr135/Company_Grow",
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "E-Commerce Store",
    desc: "Created a full-featured e-commerce platform for product browsing, inventory, and secure payments using JavaScript, HTML, and CSS.",
    link: "https://github.com/rohanshr135/Product_store",
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "Movie Recommender System",
    desc: "Built a personalized recommender system using collaborative and content-based filtering with Python and Jupyter Notebook.",
    link: "https://github.com/rohanshr135/Recommender-system",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
