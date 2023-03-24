import React from "react";
import PartcularTask from "./PartcularTask";

const TaskList = ({ tasks }) => {
  return (
    <div className="lws-task-list">
      {tasks?.length && tasks.map((t) => <PartcularTask key={t.id} task={t} />)}
    </div>
  );
};

export default TaskList;
