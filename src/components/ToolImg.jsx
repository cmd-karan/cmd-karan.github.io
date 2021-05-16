import React from "react";

function ToolImg(props) {
    console.log(props.tool);
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 tool-box">
      {/* <img  className="tool-img" src={`./images/tools/` + props.tool} /> */}
      {props.tool.tool}
      <p>{props.tool.subtitle}</p>
    </div>
  );
}

export default ToolImg;
