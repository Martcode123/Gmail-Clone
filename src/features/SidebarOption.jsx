import React from "react";
import "./SidebarOption.css";

function sidebarOption({ Icon, title, number }) {
  return (
    <div className="sidebar__options">
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default sidebarOption;
