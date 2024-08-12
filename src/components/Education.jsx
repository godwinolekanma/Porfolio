import React from "react";
import Card from "./Card";

var education = {
  id: 1,
  title: "Education",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde praesentium ipsa debitis laudantium! Perspiciatis impedit tempore deserunt necessitatibus. Alias quos sint suscipit magni asperiores dignissimos, voluptate autem vero facere cupiditate.",
  items: [
    {
      year: "2024",
      title: "Computer Science Degree",
      platform: "Wichita State Univerity",
    },
    {
      year: "2023",
      title: "FullStack Developer Course (JavaScript, Node, React)",
      platform: "Udemy",
    },
    {
      year: "2022",
      title: "Python Developer BootCamp (Python, Flask)",
      platform: "Udemy",
    },
    { year: "2019", title: "C++ Developer BootCamp", platform: "Udemy" },
  ],
};

function Education() {
  return <Card key={education.id} section={education} />;
}

export default Education;
