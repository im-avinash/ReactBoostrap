import React from "react";
import Common from "./Common";
import web from "../images/home.svg";

function About() {
  return (
    <React.Fragment>
      <Common
        name="Develope your website with"
        imgsrc={web}
        visit="/services"
        btnName="Contact Now"
      />
    </React.Fragment>
  );
}

export default About;
