import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployes, getListEmployee } from "../services/LocalStorage";
import { NavBar } from "./Button";

export const EmployeeItem = ({ employee, setEmployees }) => {
  const Navigate = useNavigate();
  const removeEmployee = () => {
    deleteEmployes(id);
    setEmployees(getListEmployee());
  };

  const { id, name, email, address, phone } = employee;
  return (
    <tr >
      <th>{name}</th>
      <th>{email}</th>
      <th>{address}</th>
      <th>{phone}</th>
      <th>
        <div className="d-flex gap-3">
          <span
            role="button"
            className="badge btn-lg bg-success"
            onClick={() => Navigate(`/edit-employee/${id}`)}
          >
            Edit
          </span>
          <span
            role="button"
            className="badge bg-danger"
            onClick={() => removeEmployee()}
          >
            Delete
          </span>
        </div>
      </th>
    </tr>
  );
};
