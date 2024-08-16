import React from "react";
import Card from "./Card";

function Experience() {
  var experience = {
    title: "Experience",
    desc: "Here is a summary of my professional experience, highlighting roles and achievements in different positions over the years.",
    items: [
      {
        id: 1,
        year: "2023-Present",
        title: "Freelance Developer",
        platform: "Self-Employed",
      },
      {
        id: 2,
        year: "2022-2023",
        title: "IOS Developer",
        platform: "McConnell U.S. Airforce",
      },
      {
        id: 3,
        year: "2017-2019",
        title: "IT Support",
        platform: "LeoFlinch Inc",
      },
    ],
  };
  return <Card key={experience.id} section={experience} />;
}

export default Experience;
