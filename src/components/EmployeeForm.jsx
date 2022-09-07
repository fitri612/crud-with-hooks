import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {
  addEmployee,
  editEmployee,
  getEmployeeById,
} from "../services/LocalStorage";
import { useState } from "react";
import uuid from "react-uuid";

export const EmployeeForm = () => {
  const Navigate = useNavigate();
  // const (id ) = useParams
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const [Values, handleInputChange, resetForm, setForm] = useForm({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editEmployee(id, Values) : addEmployee({ id: uuid(), ...Values });
    setShowAlert(true);
    // console.log(Values);

    resetForm();
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <button
          className="btn btn-outline-secondary"
          style={{ width: "150px", marginLeft: "40px", fontSize: "20px" }}
          onClick={() => Navigate("/")}
        >
          Show User
        </button>
        <h1
          className="text-center"
          style={{ marginRight: "40px", fontSize: "30px" }}
        >
          {id ? "Edit" : "Create"} User
        </h1>
      </div>
      {/* form */}
      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={Values.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={Values.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={Values.address}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter address"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={Values.phone}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter phone"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-outline-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success text-white" role="alert">
            Employee added successfully
          </div>
        </div>
      )}
    </div>
  );
};
