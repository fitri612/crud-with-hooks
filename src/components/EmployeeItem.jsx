import React from "react";

export const EmployeeItem = () => {
  return (
    <tr>
      <th>Employee example</th>
      <th>Employee@gmail.com</th>
      <th>Employee 123</th>
      <th>000000</th>
      <th>
        <div className="d-flex gap-3">
          <span role="button" className="badge bg-success">
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
