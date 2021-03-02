import React from "react";
import style from './Detail.module.css'

const Detail = (props) => {


    return (
        <dev>
            <div className={style.details}>
                <span className={style.name}>{props.name}</span>
                <span className={style.cipher}>{props.cipher}</span>
                <span className={style.list}>{props.list.length} шт</span>
            </div>

        </dev>
    )
}

export default Detail