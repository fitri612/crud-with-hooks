import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const Navigation = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          CRUD App LS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto"></ul>
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            onClick={() => Navigation("./create-employee")}
          >
            Create Employee
          </button>
        </div>
      </div>
    </nav>
  );
};
