import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddNewTask/AddTask";
import EditTask from "./components/EditTask/EditTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:taskId" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
