import React from "react";
import {Route} from "react-router-dom";
import General from "../Main/General/General";
import Plan from "../Main/Plan/Plan";
import Employees from "../Main/Employee/Employees";
import Statistics from "../Main/Statistacs/Statistics";
import DetailInfo from "./DetailInfo/DetailInfo";

const Aside = (props) => {
    return (
        <aside>
            <Route path='/main' render={() => <General />}/>
            <Route path='/plan' render={ () => <Plan />}/>
            <Route path='/detail' render={ () => <DetailInfo />}/>
            <Route path='/employee' render={ () => <Employees/>}/>
            <Route path='/statistics' render={ () => <Statistics />}/>
        </aside>
    )
}

export default Aside