import React from "react";
import Common from "./Common";
import web from "../images/home.svg";

function Home() {
  return (
    <React.Fragment>
      <Common
        name="Develope your website with"
        imgsrc={web}
        visit="/services" 
        btnName="Get Started"
      />
    </React.Fragment>
  );
}

export default Home;
