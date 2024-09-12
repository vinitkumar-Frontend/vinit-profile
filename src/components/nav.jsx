import React from "react";
import {
  AiOutlineFile,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <h1>VK</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <AiOutlineMenu />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <AiOutlineHome /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <AiOutlineUser /> About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  <AiOutlineFundProjectionScreen /> Projetcs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resume">
                  <AiOutlineFile /> Resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
