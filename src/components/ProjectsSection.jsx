"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { Press_Start_2P } from "next/font/google";

const press_start_2p = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const projectsData = [
  {
    id: 1,
    title: "QuizPal",
    description: "Flashcard Quizzing Webapp",
    image: "/images/projects/quizpal_preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jonoliver1997/QuizPal",
    previewUrl: "https://quizpal.netlify.app",
  },
  {
    id: 2,
    title: "Summize",
    description: "AI Article Summarizer",
    image: "/images/projects/summize_preview.png",
    tag: ["All", "Web", "Next.js"],
    gitUrl: "https://github.com/jonoliver1997/ai_summarizer",
    previewUrl: "https://jonoliveraisummize.netlify.app",
  },
  {
    id: 3,
    title: "Ripple",
    description: "Real-time Chat Application",
    image: "/images/projects/ripple_preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Algorithm-Allies/chatApp",
    previewUrl: "https://ripple-production.vercel.app",
  },
  {
    id: 4,
    title: "Mystical Bookshelf",
    description: "Mock Bookstore Webapp with in an AI Chatbot",
    image: "/images/projects/mystical-books_preview.png",
    tag: ["All", "Web", "Next.js"],
    gitUrl: "https://github.com/jonoliver1997/mystical-bookshelf-ai-chatbot",
    previewUrl: "https://mystical-bookshelf-ai-chatbot.vercel.app",
  },
  {
    id: 5,
    title: "OliBot",
    description: "AI Chatbot Powered by GPT-4",
    image: "/images/projects/olibot_preview.png",
    tag: ["All", "Next.js, Web"],
    gitUrl: "https://github.com/jonoliver1997/olibot",
    previewUrl: "https://olibot.vercel.app",
  },
  // {
  //   id: 6,
  //   title: "Project 6",
  //   description: "Description 6",
  //   image: "https://via.placeholder.com/300",
  //   tag: ["All", "Next.js"],
  //   gitUrl: "https://github.com",
  //   previewUrl: "https://github.com",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="lg:py-16 mt-24">
      <h2
        className={`text-center text-4xl font-bold ${press_start_2p.className} text-transparent bg-clip-text bg-gradient-to-r from-customGreen-400 to bg-customGreen-100`}
      >
        Project Highlights
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={() => handleTagChange("All")}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={() => handleTagChange("Web")}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Javascript"
          onClick={() => handleTagChange("Javascript")}
          isSelected={tag === "Javascript"}
        />
        <ProjectTag
          name="Next.js"
          onClick={() => handleTagChange("Next.js")}
          isSelected={tag === "Next.js"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
