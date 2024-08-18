import React, { useState } from "react";
import Header from "../components/Header";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Profile from "../components/Profile";



function About() {
  const myStyle = {
    backgroundColor: "#83b4ff",
    color: "#081b29",
  };

  const [changeStyle, setStyle] = useState({
    first: true,
    second: false,
    third: false,
  });

  const [aboutComponent, setComponent] = useState(<Experience />);

  function handleClick(event) {
    const { name } = event.target;

    if (name === "experience") {
      setStyle({ first: true, second: false, third: false });
      setComponent(<Experience />);
    } else if (name === "education") {
      setStyle({ first: false, second: true, third: false });
      setComponent(<Education />);
    } else if (name === "skills") {
      setStyle({ first: false, second: false, third: true });
      setComponent(<Skills />);
    }
  }
  return (
    <div>
      <Header />
      <main className="container">
      <div className="flex-container">
      <div>
      <h1>About Me</h1>
      <p style={{fontSize: "22px", textAlign: "justify"}}>
      Hi, I am Godwin Olekanma a seasoned Senior Software Engineer with a passion for building scalable and efficient applications. With over 6 years of experience in leading and delivering large-scale distributed systems and enterprise CRM/CSM/SaaS solutions, I excel in cloud-native and Java expertise, Microservices architecture, and technical leadership.
      </p>
      </div>
        <Profile />
      </div>
        <section className="flex-container">
          <div className="main-content" id="section-width">
            <h1>
              Why <span style={{ color: "#83b4ff" }}>Hire Me</span>
            </h1>
            <p className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae veritatis illum maxime quibusdam odio accusantium
            </p>
            <div className="about-button">
              <button
                name="experience"
                onClick={handleClick}
                value={<Experience />}
                style={changeStyle.first ? myStyle : {}}
              >
                Experience
              </button>
              <button
                name="education"
                onClick={handleClick}
                value={<Education />}
                style={changeStyle.second ? myStyle : {}}
              >
                Educaton
              </button>
              <button
                name="skills"
                onClick={handleClick}
                value={<Skills />}
                style={changeStyle.third ? myStyle : {}}
              >
                Skills
              </button>
            </div>
          </div>
          {aboutComponent}
        </section>
      </main>
    </div>
    
  );
}

export default About;
