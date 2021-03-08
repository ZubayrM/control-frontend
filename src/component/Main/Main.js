import React from 'react';
import {Route} from "react-router-dom";
import EmployeeList from "./Employee/EmployeeList";
import General from "./General/General";
import Statistics from "./Statistacs/Statistics";
import DetailList from "./Details/DetailList";
import PlanList from "./Plan/PlanList";

const Main = (props) => {

    return (
        <main>
            <div className='col1'>
                <Route path='/main' render={() => <General />}/>
                <Route path='/plan' render={ () => <PlanList />}/>
                <Route path='/detail' render={() => <DetailList />}/>
                <Route path='/employee' render={ () => <EmployeeList/>}/>
                <Route path='/statistics' render={ () => <Statistics />}/>
            </div>
        </main>
    )
}

export default Main