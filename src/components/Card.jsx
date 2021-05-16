import React from "react";
import { IconApps, IconBrandGithub, IconExternalLink } from "@tabler/icons";

function Card({project}) {
    const externalLinkComponent = (<a href={project.externalLink}>
    <IconExternalLink width="32" height="32" strokeWidth="1.5" />
</a>);
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <div className="card-header">
            <IconApps  className="sub-heading" width="80" height="80" strokeWidth=".75"/>
            <div  className="external-link">
                <a href={project.github}>
                    <IconBrandGithub width="32" height="32" strokeWidth="1.5" />
                </a>
                {project.externalLink && externalLinkComponent}
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title heading">{project.title}</h5>
          <p className="card-text">
            {project.description}
          </p>
        </div>
        <div className="card-footer">
            <table className="skill-used">
            <tbody>
                <tr>
                {project.techStack.map((item, index) => {
                    return <td key={index}>{item}</td>
                })}
                </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default Card;
