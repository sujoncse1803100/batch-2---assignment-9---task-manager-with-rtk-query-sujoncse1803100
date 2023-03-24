import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/logo.svg";

const Navbar = ({ getSearchFunction }) => {
  const handleChange = (e) => {
    getSearchFunction(e.target.value);
  };
  return (
    <nav className="container relative py-3">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={img} alt="#" />
        </Link>
        <div className="flex-1 max-w-xs search-field group">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Task"
            className="search-input"
            id="lws-searchTask"
            onChange={handleChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
