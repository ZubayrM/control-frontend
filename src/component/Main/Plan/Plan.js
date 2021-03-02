import React from 'react';
import './../../../App.css'
import './PlanStyle.css'
import Product from "./Product";
import {NavLink} from "react-router-dom";

const Plan = () => {
    return (
        <div>
            <h1>PLAN</h1>
            {/*<NavLink to='/plan/1'>*/}
            {/*    <Product name='АКУ-58' value = '79'/>*/}
            {/*</NavLink>*/}
            {/*<NavLink to='/plan/2'>*/}
            {/*    <Product name = 'СПГ' value = '36'/>*/}
            {/*</NavLink>*/}
        </div>
    );
}

export default Plan