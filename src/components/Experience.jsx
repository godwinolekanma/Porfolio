import React from "react";
import Card from "./Card";

function Experience() {
  var experience = {
    title: "Experience",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis id ducimus adipisci voluptatem dignissimos cumque! Enim porro in culpa autem molestiae praesentium expedita officiis reiciendis minima laborum. Tempora, beatae architecto!",
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
