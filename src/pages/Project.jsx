import React from "react";
import Header from "../components/Header";
import WorkSliderBtns from "../components/WorkSliderBtns";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import drinkSite from "../assets/drinkbg.png";
import movieBg from "../assets/Moviebg.png"
import embraceBg from "../assets/embrace.png"
import iss from "../assets/ISS.jpg"

import "swiper/css";

function Project() {
  var projects = [
    {
      id: 1,
      name: "Drink Maker",
      desc: "Developed and maintained a dynamic website utilizing a RESTful API to provide random drink recipes. Integrated a robust database of cocktails and mocktails, ensuring a seamless user experience",
      tech: ["Express,", "Html5,", "CSS3,", "JavaScript,", "Axios/API"],
      live: "https://godwin-drinkrecipesite.onrender.com",
      git: "https://github.com/godwinolekanma/Drink-Recipe-Website",
      Image: drinkSite,
    },
    {
      id: 2,
      name: "Movie Tracker",
      desc: "Created FilmTracker, a movie tracking website where users can rate and review films. Utilized a robust database to manage movie data and user interactions, and implemented secure login features for personalized experiences",
      tech: ["Python,", "Flask,", "SQLAlchemy"],
      live: "https://my-movie-library.onrender.com/",
      git: "https://github.com/godwinolekanma/movie-library",
      Image:movieBg
    },
    {
      id: 3,
      name: "Embrace Your Journey",
      desc: "Developed Embrace Your Journey, a life coaching website utilizing subscription models for access to personalized coaching services. Integrated secure payment systems to manage subscriptions and deliver tailored coaching plans.",
      tech: ["JavaScript,", "Html5,", "CSS3"],
      live: "https://embraceyourjourney.thinkific.com/",
      git: "https://github.com/godwinolekanma/Embrace-Your-Journey",
      Image:embraceBg,
    },
    {
      id: 4,
      name: "ISS Tracker",
      desc: "Developed a Python-based program that tracks the International Space Station (ISS) in real-time using RESTful APIs. The program fetches live data, including the ISS's current position and upcoming visible passes based on the user’s location",
      tech: ["Python,", "RESTful API"],
      // live: "https://embraceyourjourney.thinkific.com/",
      git: "https://github.com/godwinolekanma/ISS-TRACKER",
      Image:embraceBg,
    },
  ];
  var [project, setProject] = useState(projects[0]);

  const handleSlide = (swipe) => {
    var currentIndex = swipe.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <div>
      <Header />
      <main className="container">
        <div className="flex-container">
          <div className="project-content">
            <h1 style={{ fontSize: "82px", margin: "0" }} className="blue trans">0{project.id}</h1>
            <h2
              style={{
                fontSize: "42px",
                margin: "0",
              }}
            >
              {project.name}
            </h2>
            <p>{project.desc}</p>
            <ul>
              {project.tech.map((item, index) => {
                return (
                  <li key={index} className="blue">
                    {item}
                  </li>
                );
              })}
            </ul>
            <hr />
            <div className="tag" style={{ justifyContent: "start" }}>
            {project.live && <a href={project.live} target="_blank">
                <i className="bx bx-link-external" style={{ fontSize: "30px" }}></i>
              </a>}
              <a href={project.git} target="_blank">
                <i className="bx bxl-github" style={{ fontSize: "30px" }}></i>
              </a>
            </div>
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={handleSlide}
            className="project-content"
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <img src={project.Image} className="project-image" alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
            <WorkSliderBtns />
          </Swiper>
        </div>
      </main>
    </div>
  );
}

export default Project;
