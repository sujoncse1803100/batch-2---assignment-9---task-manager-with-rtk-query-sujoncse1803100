import Navbar from "../Navbar/Navbar";
import AddNew from "./TaskList/AddNew";
import Sidebar from "./Sidebar/Sidebar";
import TaskList from "./TaskList/TaskList";
import { useState, useEffect } from "react";
import { useGetTasksQuery } from "../../features/tasks/taskApi";

const Home = () => {
  const { data: originalasks, isSuccess: isGetTaskSuccess } =
    useGetTasksQuery();
  const [select, setSelect] = useState([
    "Scoreboard",
    "Flight Booking",
    "Product Cart",
    "Book Store",
    "Blog Application",
    "Job Finder",
  ]);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filterdTasks =
      originalasks?.filter((task) =>
        task.taskName.toLowerCase().includes(search.toLowerCase())
      ) || originalasks;

    setTasks(filterdTasks);
  }, [search, originalasks]);

  useEffect(() => {
    setTasks(originalasks);
  }, [isGetTaskSuccess, originalasks]);

  useEffect(() => {
    const filterdTasks = originalasks?.filter((task) =>
      select.includes(task?.project?.projectName)
    );

    setTasks(filterdTasks);
  }, [originalasks, select]);

  const handleFilterKey = (data) => {
    if (data.willing) {
      const newSelect = [...select];
      newSelect.push(data.text);
      setSelect(newSelect);
    } else {
      const newSelect = select?.filter((s) => s !== data.text);
      setSelect(newSelect);
    }
  };

  const handleSearch = (queryText) => {
    setSearch(queryText);
  };

  return (
    <>
      <Navbar getSearchFunction={handleSearch} />
      <div className="container relative">
        <Sidebar handleFilterKey={handleFilterKey} />
        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
          <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <AddNew />
            <TaskList tasks={tasks} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
