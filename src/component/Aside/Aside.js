import React from "react";
import {Route} from "react-router-dom";
import General from "../Main/General/General";
import EmployeeList from "../Main/Employee/EmployeeList";
import Statistics from "../Main/Statistacs/Statistics";
import DetailInfoList from "./DetailInfo/DetailInfoList";
import PlanInfo from "./PlanInfo/PlanInfo";

const Aside = (props) => {
    return (
        <aside>
            <Route path='/main' render={() => <General />}/>
            <Route path='/plan/*' render={ () => <PlanInfo product = {props.product}/>}/>
            <Route path='/detail/*' render={ () => <DetailInfoList />}/>
            <Route path='/employee' render={ () => <EmployeeList/>}/>
            <Route path='/statistics' render={ () => <Statistics />}/>
        </aside>
    )
}

export default Aside