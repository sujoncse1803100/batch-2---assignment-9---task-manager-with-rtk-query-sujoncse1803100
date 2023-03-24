import { useGetTeamMembersQuery } from "../../features/team/teamApi";
import { useGetProjectsQuery } from "../../features//porjects/projectsApi";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useAddTaskMutation } from "../../features/tasks/taskApi";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [addTask] = useAddTaskMutation();
  const { data: members } = useGetTeamMembersQuery();
  const { data: projects } = useGetProjectsQuery();
  const [newTaskInfo, setNewTaskInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const info = { ...newTaskInfo };
    info[e.target.name] = e.target.value;
    setNewTaskInfo(info);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(newTaskInfo).length === 4) {
      const project =
        projects?.find((p) => p.projectName === newTaskInfo.projectName) || {};
      const teamMember =
        members?.find((m) => m.name === newTaskInfo.teamMember) || {};

      addTask({
        taskName: newTaskInfo.taskName,
        teamMember,
        project,
        deadline: newTaskInfo.deadline,
      });

      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container relative">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Create Task for Your Team
          </h1>

          <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="fieldContainer">
                <label for="lws-taskName">Task Name</label>
                <input
                  type="text"
                  name="taskName"
                  id="lws-taskName"
                  required
                  placeholder="Implement RTK Query"
                  onChange={handleChange}
                />
              </div>

              <div className="fieldContainer">
                <label>Assign To</label>
                <select
                  name="teamMember"
                  id="lws-teamMember"
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden selected>
                    Select Job
                  </option>
                  {members?.length &&
                    members.map((m) => {
                      return <option>{m.name}</option>;
                    })}
                </select>
              </div>
              <div className="fieldContainer">
                <label for="lws-projectName">Project Name</label>
                <select
                  id="lws-projectName"
                  name="projectName"
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden selected>
                    Select Project
                  </option>
                  {projects?.length &&
                    projects.map((p) => {
                      return <option>{p.projectName}</option>;
                    })}
                </select>
              </div>

              <div className="fieldContainer">
                <label for="lws-deadline">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  id="lws-deadline"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="text-right">
                <button type="submit" className="lws-submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default AddTask;
