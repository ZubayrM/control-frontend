import React from "react";
import {Route} from "react-router-dom";
import General from "../Main/General/General";
import Plan from "../Main/Plan/Plan";
import EmployeeList from "../Main/Employee/EmployeeList";
import Statistics from "../Main/Statistacs/Statistics";
import DetailInfo from "./DetailInfo/DetailInfo";

const Aside = (props) => {
    return (
        <aside>
            <Route path='/main' render={() => <General />}/>
            <Route path='/plan' render={ () => <Plan />}/>
            <Route path='/detail[]' render={ () => <DetailInfo />}/>
            <Route path='/employee' render={ () => <EmployeeList/>}/>
            <Route path='/statistics' render={ () => <Statistics />}/>
        </aside>
    )
}

export default Aside