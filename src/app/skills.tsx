"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Software Skills",
    children:
      "Languages: JavaScript, Python, C/C++, HTML, CSS, MATLAB (basic). Web/Frameworks: React, Node.js, Express, MongoDB, REST APIs, JWT, HTTP-only cookies. DevOps/Tools: Git, GitHub, VS Code, Postman, Linux, Agile.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mechanical Skills",
    children:
      "Programming: Python, C/C++, MATLAB*. Python libraries: Pandas, Numpy, Pytorch*. FEA/CFD software: Ansys, COMSOL. CAD Software: SolidWorks, Fusion 360. * Elementary proficiency",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
