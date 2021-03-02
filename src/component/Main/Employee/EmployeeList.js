import React from 'react';
import './../../../App.css'
import Employee from "./Employee";

const EmployeeList = (props) => {

    // let employeesList = props.employees.map(e => <Employee name = {e.name} surName = {e.surName}/>)
    return (
        <div>
            {/*{employeesList}*/}
            <h1>EMPLOYEE</h1>
        </div>
    )
}

export default EmployeeList