"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Roboto_Mono } from "next/font/google";
import { Press_Start_2P } from "next/font/google";

const press_start_2p = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Tailwind</li>
        <li>React Native</li>
        <li>Node</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>Golang</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bay Valley Tech Coding Academy - Fullstack Engineering</li>
        <li>Sacramento City College - Computer Science (in progress)</li>
        <li>Cal Poly Humboldt - B.S. Kinesiology</li>
      </ul>
    ),
  },
  {
    title: "Technologies",
    id: "technologies",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS</li>
        <li>Azure</li>
        <li>Git/Github</li>
        <li>Figma</li>
        <li>Jira</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className={`text-white lg:py-16 ${roboto_mono.className} mt-28 lg:mt-0`}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center lg:items-start justify-center lg:justify-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="space-y-4">
          <Image
            src="/images/waterfall.jpg"
            width={500}
            height={500}
            alt="Jonathan Oliver"
            className="rounded-lg w-52 h-52 md:w-80 md:h-80 lg:w-[500px] lg:h-[600px] object-cover"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <div className="rounded-lg bg-gradient-to-br from-customGreen-500 via-customGreen-300 to-customGreen-100  relative">
            <div className="bg-black m-1 p-2">
              <h2
                className={`text-4xl font-bold text-white mb-5 mx-2 mt-2 ${press_start_2p.className}`}
              >
                About Me
              </h2>
              <p className="text-base md:text-lg text-gray-300 mx-2">
                I&apos;m Jonathan Oliver, a software engineer from California
                with a passion for creating meaningful, user-centered
                applications. With a strong foundation in full-stack
                development, I specialize in building responsive and scalable
                web and mobile applications. I have hands-on experience
                designing intuitive user interfaces and developing efficient
                backend solutions using technologies like Next.js, React Native,
                and Node.
                <br />
                <br />
                Beyond my technical skills, I am driven by a belief that
                technology can be a force for good, especially when it comes to
                promoting equity and equality for underrepresented and
                marginalized communities. I enjoy collaborating with others to
                solve complex problems and build innovative digital experiences
                that can make a positive impact. Whether working in a team or on
                my own, I&apos;m always looking for ways to leverage my skills
                to contribute to projects that drive change.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("technologies")}
              active={tab === "technologies"}
            >
              Technologies
            </TabButton>
          </div>
          <div className="mt-8 ml-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
