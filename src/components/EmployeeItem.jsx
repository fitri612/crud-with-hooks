import React from "react";
import { useNavigate } from "react-router-dom";

export const EmployeeItem = ({ employee }) => {
  const Navigate = useNavigate();

  const { id, name, email, address, phone } = employee;
  return (
    <tr>
      <th>{name}</th>
      <th>{email}</th>
      <th>{address}</th>
      <th>{phone}</th>
      <th>
        <div className="d-flex gap-3">
          <span role="button" className="badge bg-success" onClick={() => Navigate(`/edit-employee/${id}`)} >
            Edit
          </span>
          <span role="button" className="badge bg-danger">
            Delete
          </span>
        </div>
      </th>
    </tr>
  );
  
};
