import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import spring from "../assets/spring-boot.png"
import mysql from "../assets/mysql.png"
import intellij from "../assets/intellij.png"
import node from "../assets/node.png"


const Experience = () => {
  const backTechs = [
    {
      id: 6,
      src: java,
      title: " Core Java",
      style: "shadow-purple-400",
    },
    
    {
      id: 7,
      src: spring,
      title: "SpringBoot",
      style: "shadow-pink-400",
    },
    {
      id: 6,
      src: node,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: mysql,
      title: "MySql",
      style: "shadow-orange-400", 
    },
    {
      id: 9,
      src: intellij,
      title: "Intellij",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    
    
  ];
  const frntTechs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-600",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
          <h1>Back-End Techs:</h1>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          
          {backTechs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div>
          <h1>Front-End Techs:</h1>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          
          {frntTechs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
