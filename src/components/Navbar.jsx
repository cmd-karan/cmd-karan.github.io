import React from "react";
import NavItem from "./NavItem";
import { IconChevronRight, IconChevronLeft } from '@tabler/icons';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <span className="nav-title">
          <IconChevronLeft />
          Karan Khanna /
          <IconChevronRight />
          </span>
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <NavItem id="home" navItemName="Home"/>
                <NavItem id="about" navItemName="About"/>
                <NavItem id="experience" navItemName="Experience" />
                <NavItem id="project" navItemName="Projects" />
                <NavItem id="toolsoftrade" navItemName="Tools of Trade" />
                <NavItem id="contact" navItemName="Contact" />
                <a class="btn btn-outline-primary" href="#" role="button">Resume</a>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
