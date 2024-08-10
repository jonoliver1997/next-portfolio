"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description 1",
    image: "https://via.placeholder.com/300",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description 2",
    image: "https://via.placeholder.com/300",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description 3",
    image: "https://via.placeholder.com/300",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description 4",
    image: "https://via.placeholder.com/300",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description 5",
    image: "https://via.placeholder.com/300",
    tag: ["All", "Javascript"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description 6",
    image: "https://via.placeholder.com/300",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
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
    <section ref={ref} className="lg:py-16">
      <h2 className="text-center text-4xl font-bold text-white">
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
