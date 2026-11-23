// import React from 'react'
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 text-md font-bold mb-10 text-yellow-300">
      <NavLink className={(e) => (e.isActive ? "text-red-600" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-600" : "")}
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-600" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActiv ? "text-red-600" : "")}
        to="/create"
      >
        Create-Recipes
      </NavLink>
    </div>
  );
};

export default Navbar;
