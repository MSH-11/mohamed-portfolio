"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "webApp",
    title: "P-reset",
    description:
      "An AI-powered personalized self-care web application that provides smart scheduling, habit and mood tracking, and NLP-driven journaling features.",
    stack: [
      { name: "Next.js" },
      { name: "Flask" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/p-reset.png",
    live: "",
    github: "https://github.com/v-song/p-reset",
  },
  {
    num: "02",
    category: "mobileApp",
    title: "MoodMate",
    description:
      "MoodMate is a daily journaling mobile app promoting self-reflection and mental well-being through mood tracking and AI-driven personalized feedback and recommendations.",
    stack: [
      { name: "Expo" },
      { name: "Supabase" },
      { name: "OpenAI API" },
      { name: "React Native" },
    ],
    image: "/assets/work/MoodMate.png",
    live: "",
    github: "https://github.com/MSH-11/MoodMate",
  },
  {
    num: "03",
    category: "mobileApp",
    title: "Greptile Mobile",
    description:
      "Greptile Mobile lets you search and interact with your repositories on the go. Sign in with GitHub, select repos, and use AI to explore your codebase from your phone.",
    stack: [
      { name: "Expo" },
      { name: "GitHub API" },
      { name: "Greptile API" },
      { name: "React Native" },
    ],
    image: "/assets/work/greptile-mobile.png",
    live: "",
    github: "https://github.com/MSH-11/Greptile-Mobile",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:p-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[40%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/** outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/** project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/** project description */}
              <p className="text-white/60">{project.description}</p>
              {/** stack */}
              <ul className="flex gap-4 text-center justify-center items-center">
                {project.stack.map((item, index) => {
                  return (
                    <>
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                      </li>
                      <li key={index} className="text-xl text-accent">
                        {index !== project.stack.length - 1 && "|"}
                      </li>
                    </>
                  );
                })}
              </ul>
              {/** border */}
              <div className="border border-white/20"></div>
              {/** buttons */}
              <div className="flex items-center gap-4">
                {/** live project button */}
                {/**<Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>*/}

                {/** github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[60%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="relative group flex justify-center items-center"
                      style={{ paddingTop: "calc(56.25% + 50px)" }} // Adjust container height to include buttons
                    >
                      {/** overlay */}
                      <div className="absolute top-0 bottom-[44px] w-full h-auto bg-black/15 z-10"></div>
                      {/** image */}
                      <div
                        className="absolute top-0 left-0 w-full"
                        style={{ height: "calc(100% - 50px)" }} // Maintain image height and leave space for buttons
                      >
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/** slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0  bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
