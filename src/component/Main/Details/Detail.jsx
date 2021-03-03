import React from "react";
import style from './Detail.module.css'
import {NavLink} from "react-router-dom";

const Detail = (props) => {


    return (
        <div  className={style.details}>
            <NavLink to= {"/detail/" + props.cipher}>
                <div className={style.detail}>
                    <div className={style.name}>
                        <span >{props.name}</span>
                    </div>
                    <div className={style.cipher}>
                        <span >{props.cipher}</span>
                    </div>
                    <div className={style.list}>
                        <span >{props.list.length} шт.</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Detail