import React from "react";

function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link left" aria-current="page" href={"#"+props.id}>
        {props.navItemName}
      </a>
    </li>
  );
}

export default NavItem;
