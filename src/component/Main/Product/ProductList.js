import * as React from "react";
import style from './ProductList.module.css'

export default class ProductList extends React.Component{

    render() {
        return(
            <div className={style.products}>
                <h1>Изделия</h1>
            </div>
        )
    }

}