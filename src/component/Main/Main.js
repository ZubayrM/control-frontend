import React from 'react';
import {Route} from "react-router-dom";
import Plan from "./Plan/Plan";
import Employees from "./Employee/Employees";
import General from "./General/General";
import Statistics from "./Statistacs/Statistics";
import DetailList from "./Details/DetailList";

const Main = (props) => {

    return (
        <main>
            <div className='col1'>
                <Route path='/main' render={() => <General />}/>
                <Route path='/plan' render={ () => <Plan />}/>
                <Route path='/detail' render={() => <DetailList />}/>
                <Route path='/employee' render={ () => <Employees/>}/>
                <Route path='/statistics' render={ () => <Statistics />}/>
            </div>
        </main>
    )
}

export default Main