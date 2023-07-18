// import { data } from "../data";
export default function EmployeeListItem({ title, name, headshot, id }) {
    return (
      <div key={id} className="employee-profile" >
        <img src={headshot} alt={name} className="img" />
        <h4 className="name">{name}</h4>
        <p className="title">{title}</p>
      </div>
    );
  }
  
  // return data.map((employee) => {
  //   return (
  //     <div key={employee.id}>
  //       <img src={employee.headshot} alt={employee.name} />
  //       <h3>{employee.name}</h3>
  //       <p>{employee.title}</p>
  //     </div>
  //   );
  // });
  