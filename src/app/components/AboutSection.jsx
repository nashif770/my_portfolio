"use client";
import React, { useState, useTransition } from "react";
import image from "../../../public/images/aboutImage.jpg";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NextJs</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Information Technology and Sciences</li>
        <li>Chittagong Polytechnic Institute</li>
      </ul>
    )
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete Web Development</li>
        <li>Responsive Design and Development</li>
      </ul>
    )
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px--4 xl:gap-16 sm:py-16 sm:px-16">
        <Image src={image} width={500} height={500}></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            hic, corporis fuga a magni error officia neque officiis accusamus
            tempore rerum provident non, eaque pariatur inventore recusandae id
            quia architecto!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t)=> t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
