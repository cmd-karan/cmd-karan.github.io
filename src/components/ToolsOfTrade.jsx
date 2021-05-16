import React from "react";
import ToolImg from "./ToolImg";
import tools from "../tool";

function ToolsOfTrade() {
    console.log(tools);
  return (
    <div id="toolsoftrade" className="container">
      <div className="tumblr">
        <div className="heading-box">
          <h1 className="heading">Tools of Trade</h1>
          
        </div>
        <div class="row tools">
             {tools.map((tool, index) => {
                return <ToolImg tool={tool} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ToolsOfTrade;
