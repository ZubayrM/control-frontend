import React from 'react';
import * as axios from "axios";
import style from "./Product.module.css"


const Product = (props) => {



     return  (
        <div className={style.product}>
            <div className={style.name}>
                <span>{props.name}</span>
            </div>
            <div className={style.cipher}>
                <span>{props.cipher}</span>
            </div>
            <div className={style.progress}>
                <progress value={20} max='100'/>
            </div>
        </div>
     )
}

export default Product