import React, { useEffect, useState } from "react";
import { getListEmployee } from "../services/LocalStorage";
import { EmployeeItem } from "./EmployeeItem";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getListEmployee());
  }, []);

  return (
    <div>
      <h1
        className="my-5 text-center"
        style={{ marginRight: "40px", fontSize: "30px" }}
      >
        Manage User
      </h1>
      {employees.length > 0 ? (
        <div className="card bg-secondary p-3"
        style={{marginBottom: "20px"}}
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(
                (employee) =>
                  employee.id !== 0 && (
                    <EmployeeItem
                      key={employee.id}
                      employee={employee}
                      setEmployees={setEmployees}
                    />
                  )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">No Employee</h3>
      )}
    </div>
  );
};
