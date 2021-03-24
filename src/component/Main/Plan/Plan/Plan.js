import React from 'react';
import style from './Plan.module.css'
import {NavLink} from "react-router-dom";

const Plan = (props) => {
    return (

            <div className={style.plan}>
                <div className={style.date}>{props.startDate}</div>
                <div className={style.status}>
                    <span>Основной</span>
                </div>
                <div className={style.progress}>
                    <meter min={0} max={100}
                           low={70} high={90}
                           optimum={50}
                           value={5}/>
                </div>
            </div>

    );
}

export default Plan