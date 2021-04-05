import React from 'react';
import '../../../../App.css'
import Employee from "./Employee";
import EmployeeController from "../../../../controller/EmployeeController";

export class EmployeeList extends React.Component{

    // let employeesList = props.employees.map(e => <Employee name = {e.name} surName = {e.surName}/>)

    state = {
        employees: []
    }

    constructor(props) {
        super(props);

        EmployeeController.all().then(res=>{
            this.state.employees = res.data
        })
    }


    render() {
        return (
            <div>
                <h1>EMPLOYEE</h1>
                {this.state.employees.map(e=>{
                    return(
                        <div>
                            <Employee {...e} />
                        </div>
                    )
                })}


            </div>
        )
    }


}

export default EmployeeList