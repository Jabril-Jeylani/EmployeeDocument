import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"
import { findEmployee } from "../EmployeeSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"


export default function EmployeePage({employees}){

    const dispatch = useDispatch()

    const employee = useSelector((state) => state.employee)
    const current = employee.currentEmployee
    console.log(current, employee)
     

    const {EmployeeName: name} = useParams()
    console.log(name, 'name-------------')
    
    // dispatch(findEmployee(name))
    // console.log(employees)
    // const [currentEmployee, setCurrentEmployee] = useState({})
    
    // function findEmployee(){       

    //     let thisEmployee = employees.find( (person) => person.name === name )
    //     setCurrentEmployee(thisEmployee)
    //     console.log(currentEmployee)
    // }
    
    // name === employees[index].name
    useEffect(()=>{
    //    alert('loading stuff')
        dispatch(findEmployee(name))
    }, [])

    return (
    <div className="home-page">
        <Header />
        <div className='profile-box'>            
            <img src={current.headshot} className='float'/>
            <div className='employee-info'>
                <h1>{current.name}</h1>
                <h2><span style={{color: 'grey'}}>{current.title}</span></h2>
            </div>            
        </div>
        
            <h3>
            <Link>Call Office:</Link>
                <br />
                <span style={{color: 'grey'}}>{current.phone}</span>
            </h3>        
            <h3>
                <Link>Call Office:</Link> 
                <br />
                <span style={{color: 'grey'}}>{current.phone}</span>
            </h3>
            <h3>
                <Link>Call Home:</Link>
                <br />
                <span style={{color: 'grey'}}>{current.phone}</span>
            </h3>
            <h3>
                <Link>Call SMS:</Link>
                <br />
                <span style={{color: 'grey'}}>{current.phone}</span>
            </h3>
            <h3>
                <Link>Email:</Link>
                <br /> 
                <span style={{color: 'grey'}}>{current.email}</span>
            </h3>          
        
        
    </div>
    )
}


