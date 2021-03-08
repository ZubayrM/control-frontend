import React from 'react';
import style from './Plan.module.css'
import {NavLink} from "react-router-dom";

const Plan = (props) => {
    return (
        <NavLink to="/plan" className={style.a}>
                <div className={style.plan}>
                    <div className={style.date}>{props.date}</div>
                    <div className={style.status}>
                        <span>Основной</span>
                    </div>
                    {/*<NavLink to='/plan/1'>*/}
                    {/*    <Product name='АКУ-58' value = '79'/>*/}
                    {/*</NavLink>*/}
                    {/*<NavLink to='/plan/2'>*/}
                    {/*    <Product name = 'СПГ' value = '36'/>*/}
                    {/*</NavLink>*/}
                </div>
        </NavLink>

    );
}

export default Plan