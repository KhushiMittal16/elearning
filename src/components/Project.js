import React from "react";
import Card from "./Card";
import { logo } from "../assets/images";

const ProjectCard = [
  {
    cardImg: `${logo.appLogo}`,
    cardName: "Project 1",
    cardDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur tempore sint amet minus harum necessitatibus fuga dolore natus, magnam pariatur velit! Fugit illo error ea amet explicabo. Accusamus, tenetur.",
  },
  {
    cardImg: `${logo.appLogo}`,
    cardName: "Project 2",
    cardDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur tempore sint amet minus harum necessitatibus fuga dolore natus, magnam pariatur velit! Fugit illo error ea amet explicabo. Accusamus, tenetur.",
  },
  {
    cardImg: `${logo.appLogo}`,
    cardName: "Project 3",
    cardDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur tempore sint amet minus harum necessitatibus fuga dolore natus, magnam pariatur velit! Fugit illo error ea amet explicabo. Accusamus, tenetur.",
  },
  {
    cardImg: `${logo.appLogo}`,
    cardName: "Project 4",
    cardDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur tempore sint amet minus harum necessitatibus fuga dolore natus, magnam pariatur velit! Fugit illo error ea amet explicabo. Accusamus, tenetur.",
  },
];

const Project = () => {
  return (
    <div>
      <Card CardData={ProjectCard} isDashboard={false}/>
    </div>
  );
};

export default Project;
