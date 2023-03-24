import { useState } from "react";

const Project = ({ project, getFilterKey }) => {
  const [checked, setChecked] = useState(true);
  const { colorClass, projectName } = project;

  const handleChange = (e) => {
    getFilterKey({
      willing: !checked,
      text: projectName,
    });
    setChecked(!checked);
  };
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className={colorClass}
        checked={checked}
        onChange={handleChange}
        name={projectName}
      />
      <p className="label">{projectName}</p>
    </div>
  );
};

export default Project;
