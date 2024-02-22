"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 Description",
    image: "https://i.ibb.co/nRDfBFQ/Banner2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Project 1 Description",
    image: "https://i.ibb.co/nRDfBFQ/Banner2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 1 Description",
    image: "https://i.ibb.co/nRDfBFQ/Banner2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Project 1 Description",
    image: "https://i.ibb.co/nRDfBFQ/Banner2.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  console.log("tag", tag);
  console.log("projects", filteredProjects);

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Project Section
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name={"All"}
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name={"Web"}
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name={"Mobile"}
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          ></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
