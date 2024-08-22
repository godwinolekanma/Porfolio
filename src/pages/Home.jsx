import React, { useState } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import ContactButtons from "../components/ContactButtons";
import Button from "../components/Button";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"
import StairTransition from "../components/StairTransition"
import About from "./About";
import Project from "./Project";
import Resume from "./Resume";
import Footer from "../components/Footer";

function Home() {
  var words = [
    "Full Stack Developer",
    "Software Engineer",
    "Freelance Web Dev",
  ];

  var info = [
    { id: 1, text: "My Work", link: "/project" },
    { id: 2, text: "Contact Me", link: "mailto:godwinolekanma12@gmail.com" },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <section className="flex-container">
          <div className="content">
            <h1>
              Hi, I'm Godwin Olekanma <span className="wave">👋🏾</span>
            </h1>
            <div className="job-title">
              <h3 className="blue">
                <span>
                  <Typewriter
                    words={words}
                    loop={false}
                    cursor
                    cursorStyle="|"
                  />
                </span>
              </h3>
            </div>
            <p>
                      I am a passionate software developer with experience in creating dynamic web applications and tools. My journey has led me to work on projects that enhance user experiences and drive efficiency. I thrive on solving complex problems and collaborating with teams to bring innovative ideas to life. Whether it's building a responsive UI or optimizing backend functionality, I'm dedicated to delivering high-quality solutions.
            </p>
            <Button items={info} />
          </div>
          <Profile />
        </section>
        {/* <About />
        <Project />
        <Resume /> */}
        <ContactButtons />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
