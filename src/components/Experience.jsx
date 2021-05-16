import React, { useState } from "react";

import experiences from "../experience";

function Experience() {
  const [industry, setIndustry] = useState(experiences[0]);
  const [activeId, setActiveId] = useState("0");
  const selectStyle = {color: "#5AF2D9", backgroundColor: "#233554", borderColor: "#5AF2D9", width:"60%"};

  function updateIndustry(event) {
    setIndustry(experiences[event.target.id]);
    setActiveId(event.target.id);
  }
  return (
    <div id="experience" className="container">
      <div className="tumblr">
        <div className="heading-box">
          <h1 className="heading">Where I've Worked</h1>
        </div>
        <div className="row">
          <div className="col-lg-3">
            {experiences.map(({id, workplace}, index)=>{
             return ( <div
              className="workplace"
              id={id}
              key={index}
              style={activeId === id  ? selectStyle : null}
              onClick={
                updateIndustry
              }
            >{workplace}</div>)
            })}
          </div>

          <div className="col-lg-9 box">
            <h4 className="heading">
              {industry.role}<span className="sub-heading"> @ </span><a href="#" className="left">{industry.workplace}</a>
            </h4>
            <p>
              {industry.timeline}
            </p>
            <ul>
              {industry.summary.map((item, index) => (
                <li key={index} className="summary">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
