import React from "react";
import Card from "./Card";
import { logo } from "../assets/images";

const CourseCard = [
  {
    cardImg: `${logo.appLogo}`,
    cardName: "React",
    cardDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur tempore sint amet minus harum necessitatibus fuga dolore natus, magnam pariatur velit! Fugit illo error ea amet explicabo. Accusamus, tenetur.",
  },
  {
    cardImg: `${logo.appLogo}`,
    cardName: "JavaScript",
    cardDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur tempore sint amet minus harum necessitatibus fuga dolore natus, magnam pariatur velit! Fugit illo error ea amet explicabo. Accusamus, tenetur.",
  },
  {
    cardImg: `${logo.appLogo}`,
    cardName: "Java",
    cardDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur tempore sint amet minus harum necessitatibus fuga dolore natus, magnam pariatur velit! Fugit illo error ea amet explicabo. Accusamus, tenetur.",
  },
  {
    cardImg: `${logo.appLogo}`,
    cardName: ".Net",
    cardDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur tempore sint amet minus harum necessitatibus fuga dolore natus, magnam pariatur velit! Fugit illo error ea amet explicabo. Accusamus, tenetur.",
  },
];

const Tutorial = () => {
  return (
    <div>
      <Card CardData={CourseCard} isDashboard={false} />
    </div>
  );
};

export default Tutorial;
