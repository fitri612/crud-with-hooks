import React, { useEffect } from 'react'
import { getListEmployee } from '../services/LocalStorage';
import { EmployeeItem } from './EmployeeItem'

export const EmployeeList = () => {
    const [employees, setEmployees] = React.useState([]);

    useEffect(() => {
        setEmployees(getListEmployee());
    }, [])


  return (
    <div>
        <h1 className="my-5 text-center">Manage Employee</h1>
        {
            employees.length > 0 ? (
                <div className="card bg-secondary p-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EmployeeItem />
                        </tbody>
                    </table>
                </div>

            ) : (
                <h3 className="text-center">No Employee</h3>
            )
        }
    </div>
  )
}
