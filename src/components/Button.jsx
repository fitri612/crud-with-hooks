import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = () => {
  const Navigation = useNavigate();

  return (
    <button
      className="btn btn-outline-dark my-2 my-sm-0"
      style={{ width: "150px", marginLeft: "100px", fontSize: "20px" }}
      onClick={() => Navigation("./create-employee")}
    >
      Create User
    </button>
  );
};
