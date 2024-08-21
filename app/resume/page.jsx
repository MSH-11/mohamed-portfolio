"use client";

import { Description } from "@radix-ui/react-dialog";
import { icons } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaRProject,
  FaGit,
  FaDocker,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
  SiFlask,
  SiExpo,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPytorch,
  SiSupabase,
  SiGooglecloud,
  SiVim,
} from "react-icons/si";

// about datamap
const about = {
  title: "About me",
  description:
    "I’m Mohamed Hamouda, a software developer with over 3 years of experience in creating impactful and innovative solutions. With a strong foundation in Computer Science and Physics, I specialize in web and mobile app development, machine learning, and AI. I’m currently based in California, USA, and am available for freelance opportunities.",
  info: [
    { fieldName: "Name", fieldValue: "Mohamed Hamouda" },
    { fieldName: "Phone", fieldValue: "(+1)-909-293-6474" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Github", fieldValue: "MSH-11" },
    { fieldName: "Location", fieldValue: "Los Angeles, CA" },
    { fieldName: "Email", fieldValue: "mohamedhamouda200212@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Arabic" },
  ],
};

// experience datamap
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I’ve applied my expertise in computer science and physics to develop impactful mobile apps, AI-driven web solutions, and machine learning models across various projects.",
  items: [
    {
      company: "ConcentricLife",
      position: "Software Engineer",
      duration: "Aug. 2023 - May 2024",
    },
    {
      company: "Pomona Artificial Intelligence",
      position: "Web Developer",
      duration: "Sep. 2023 - Dec. 2023",
    },
    {
      company: "Rebilly",
      position: "Software Engineer Intern",
      duration: "Feb. 2023 - June 2023",
    },
    {
      company: "Claremont McKenna College's RLCIE",
      position: "Fellow",
      duration: "Sep. 2020 - May 2024",
    },
    {
      company: "W.M. Keck Science Department",
      position: "Physics Tutor and Grader",
      duration: "Sep 2021 - May 2022",
    },
    {
      company: "Tech Planet",
      position: "Robotic Systems Developer",
      duration: "May 2019 - Nov 2019",
    },
  ],
};

// education datamap
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Dual degrees in Computer Science and Physics, with advanced coursework in Big Data, Machine Learning, Algorithms, Computational Physics, and Innovation Management. Recognized as an Interdisciplinary Science Scholar and RLCIE Fellow.",
  items: [
    {
      institution: "Harvey Mudd College",
      degree: "Bachelor's in Computer Science",
      duration: "2020 - 2024",
    },
    {
      institution: "Claremont McKenna College",
      degree: "Bachelor's in Physics",
      duration: "2020 - 2024",
    },
    {
      institution: "STEM October High School For Boys",
      degree: "STEM High School Diploma",
      duration: "2017 - 2020",
    },
  ],
};

// skills datamap
const skills = {
  icon: "/assets/resume/cap.svg",
  title: "My Skills",
  description:
    "Proficient in multiple programming languages and frameworks, including Python, Java, React, and SQL. Experienced with cloud platforms, machine learning libraries, and full-stack development tools.",
  skillList: [
    // Languages
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiCplusplus />,
      name: "C/C++",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaRProject />,
      name: "R",
    },
    // Frameworks
    {
      icon: <FaReact />,
      name: "React/React Native",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "NEXT.js",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <SiExpo />,
      name: "Expo",
    },
    // Libraries
    {
      icon: <SiPandas />,
      name: "pandas",
    },
    {
      icon: <SiNumpy />,
      name: "NumPy",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
    },
    {
      icon: <SiPytorch />,
      name: "PyTorch",
    },
    // Developer Tools
    {
      icon: <FaGit />,
      name: "Git/GitHub",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud Platform",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiSupabase />,
      name: "Supabase",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <SiVim />,
      name: "Vim",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    // add more as needed
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/** content */}
          <div className="min-h-[70vh] w-full">
            {/** experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/** dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/** dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/** about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
