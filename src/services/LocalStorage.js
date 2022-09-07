import uuid from "react-uuid";

export const getListEmployee = () => {
    if(!localStorage['@employees']){
        localStorage['@employees'] = JSON.stringify([])
    }

    let employees = JSON.parse(localStorage['@employees'])
    return employees;
}

export const getEmployeeById = (id) => {
    let employees = getListEmployee();
    let employee = employees.find((employee) => employee.id === id);
    return employee;
}

export const addEmployee = (employee) => {
    const employees = getListEmployee();
    // employees.push(employee);
    employees.push({id: uuid(),...employee});
    localStorage.setItem('@employees', JSON.stringify(employees));
}

export const editEmployee = (id, newEmployee) => {
    let employees = getListEmployee();
    employees = employees.filter((employee) => employee.id !== id);
    employees.push(newEmployee);
    localStorage["@employees"] = JSON.stringify(employees);
}

export const deleteEmployes = (id) => {
    let employees = getListEmployee();
    employees = employees.filter((employee) => employee.id !== id);
    localStorage["@employees"] = JSON.stringify(employees);
}