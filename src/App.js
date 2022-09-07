import "./App.css";
import { Button } from "./components/Button";
import { Route, Routes } from "react-router-dom";
import { EmployeeForm } from "./components/EmployeeForm";
import { EmployeeList } from "./components/EmployeeList";

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
      <Button />
    </div>
  );
}

export default App;
