import React from "react";
import Card from "./Card";
import projects from "../project";

function Project() {
  return (
    <div id="project" className="container">
      <div className="tumblr">
        <div className="heading-box">
          <h1 className="heading">Projects built with ♥ by ME !</h1>
        </div>
        <div className="row">
            { projects.map((project, index) => {
              return <Card key={index} project={project} />
            }) }
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
        </div>
      </div>
    </div>

  );
}

export default Project;
