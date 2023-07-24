import EmployeeListItem from "./EmployeeListItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EmployeeList() {

  const employee = useSelector((state) => state.employee)
  

  return employee.data.map((employee, index) => {
    return (
      <Link to={`/EmployeePage/${employee.name}`} className="list-box" key={employee.id}>
        <EmployeeListItem
          name={employee.name}
          headshot={employee.headshot}
          title={employee.title}
          id={employee.id}
        />
      </Link>
    );
  });
}
