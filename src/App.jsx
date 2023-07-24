import "./index.css";
import { data } from "./data";
import HomePage from "./components/HomePage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";

export default function App() {
  //  let [employees, setEmployees] = useState(data);
  // let [employee, setEmployee] = useState(data);

  // function addEmployee(emp) {
  //   setEmployee([...employee, emp]);
  // }

  return (
    
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/EmployeePage/:EmployeeName' element={<EmployeePage />} />
      </Routes>
      
    </div>
  );
}

