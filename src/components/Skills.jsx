import React from "react";
import { FaHtml5, FaReact, FaPython, FaNodeJs, FaCss3 } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";
import {
  SiSqlalchemy,
  SiJavascript,
  SiCplusplus,
  SiExpress,
  SiAxios,
} from "react-icons/si";

function Skills() {
  var skills = {
    title: "Skills",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis id ducimus adipisci voluptatem dignissimos cumque! Enim porro in culpa autem molestiae praesentium expedita officiis reiciendis minima laborum. Tempora, beatae architecto!",
    items: [
      {
        name: "Python",
        icon: <FaPython />,
      },
      {
        name: "C++",
        icon: <SiCplusplus />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs />,
      },
      {
        name: "Express",
        icon: <SiExpress />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3 />,
      },
      {
        name: "Flask",
        icon: <BiLogoFlask />,
      },
      {
        name: "AXIOS / API",
        icon: <SiAxios />,
      },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql />,
      },
      {
        name: "SQLAlchemy",
        icon: <SiSqlalchemy />,
      },
    ],
  };
  return (
    <div className="main-content">
      <h1>
        My <span style={{ color: "#83b4ff" }}>{skills.title}</span>
      </h1>
      <p className="desc">{skills.desc}</p>
      <ul className="icon-list">
        {skills.items.map((item, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="icon">
                    <div>{item.icon}</div>
                  </TooltipTrigger>
                  <TooltipContent className="tooltip">
                    <p style={{ margin: "6px" }}>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
