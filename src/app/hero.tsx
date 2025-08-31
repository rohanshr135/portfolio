"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my Portfolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Rohan Sharma, a passionate Mechanical Engineering student at IIT Guwahati with a strong interest in software development and problem-solving. Here, you&apos;ll get a glimpse of my journey, where engineering principles meet software innovation.
          </Typography>
          <div className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            fill
            alt="team work"
            src={`${getImagePrefix()}image/_MG_4176.jpg`}
            className="h-full w-full rounded-xl object-contain"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
