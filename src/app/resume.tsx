"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "B.Tech in Mechanical Engineering - IIT Guwahati (2022-Present)",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Senior Secondary, CBSE Board - 91.4% (2022)",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Secondary, CBSE Board - 89.8% (2020)",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Education
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            A dedicated and ambitious Mechanical Engineering student at the Indian Institute of Technology, Guwahati, with a strong academic background and a passion for technology and innovation.
          </Typography>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
