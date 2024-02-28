"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementList = [
  {
    metric: "Projects",
    value: 100,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 100,
  },
  {
    metric: "Awards",
    value: 0,
  },
  {
    metric: "Years",
    value: "1+",
  },
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353f] border rounded-md py-8 px-16 flex flex-col sm:flex-row sm:mb-10 items-center justify-between">
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold">
                {achievement.value}
                {/* <AnimatedNumbers
                  includeComma
                  number={parseInt(achievement.value)}
                  locale="en-us"
                  className="text-white text-4xl font-bold"
                  configs={{
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  }}
                /> */}
              </h2>
              <p className="text-[#adb7be] text-base my-4 md:my-0">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
