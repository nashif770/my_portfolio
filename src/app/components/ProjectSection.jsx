import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 Description",
        image: "https://i.ibb.co/nRDfBFQ/Banner2.jpg",
        tag: ["all", "web"]

    },
    {
        id: 2,
        title: "React Portfolio Website",
        description: "Project 1 Description",
        image: "https://i.ibb.co/nRDfBFQ/Banner2.jpg",
        tag: ["all", "web"]

    },
    {
        id: 3,
        title: "React Portfolio Website",
        description: "Project 1 Description",
        image: "https://i.ibb.co/nRDfBFQ/Banner2.jpg",
        tag: ["all", "web"]

    },
    {
        id: 4,
        title: "React Portfolio Website",
        description: "Project 1 Description",
        image: "https://i.ibb.co/nRDfBFQ/Banner2.jpg",
        tag: ["all", "web"]

    },
]

const ProjectSection = () => {
  return (
    <>
    <h2>Project Section</h2>
    <div>
        {projectsData.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}></ProjectCard>)}
    </div>
    </>
  )
}

export default ProjectSection