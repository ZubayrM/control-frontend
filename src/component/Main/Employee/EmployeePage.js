import * as React from "react";
import EmployeeList from "./ListEmployee/EmployeeList";
import style from "./EmployeePage.module.css"

export class EmployeePage extends React.Component{

    render() {
        return(
            <div>
                <EmployeeList />
                <div className={style.window}>
                    <form>
                        <input type="file"/>
                        <input className={style.button} type="submit"/>
                    </form>
                     </div>
                <div>
                    <button className={style.button}>добавить</button>
                </div>


            </div>
        )
    }

}