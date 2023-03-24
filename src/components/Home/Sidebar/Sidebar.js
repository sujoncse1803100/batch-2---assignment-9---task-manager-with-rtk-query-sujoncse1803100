import React from "react";
import ProjectList from "./ProjectList";
import TeamMember from "./TeamMember";

const Sidebar = ({ handleFilterKey }) => {
  return (
    <div className="sidebar">
      <ProjectList handleFilterKey={handleFilterKey} />
      <TeamMember />
    </div>
  );
};

export default Sidebar;
