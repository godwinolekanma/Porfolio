import React from "react";
import Header from "../components/Header";
import resume from "../assets/GodwinCV.pdf";
import PdfViewer from "../components/PdfViewer";



function Resume() {
  function handleClick(){
    window.open(resume, "_blank");
  }
  return (
    <div>
      <Header />
      <main className="container" style={{paddingTop: "0"}}>
        <div className="resume-container about-button">
          <button onClick={handleClick}>Download CV</button>
          <PdfViewer />
          <button onClick={handleClick}>Download CV</button>
        </div>
      </main>
    </div>
  );
}

export default Resume;
