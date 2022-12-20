import React from "react";
import "./SidebarOption.css";

function sidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebar__options ${selected && `sidebar__options--active`}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default sidebarOption;
