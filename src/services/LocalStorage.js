export const getListEmployee = () => {
    if(!localStorage.getItem('employees')){
        localStorage.setItem('employees', JSON.stringify([]))
    }

    let employees = JSON.parse(localStorage.getItem('employees'))
    return employees
}