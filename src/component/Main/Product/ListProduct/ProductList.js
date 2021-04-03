import * as React from "react";
import style from './ProductList.module.css'
import {NavLink} from "react-router-dom";

export default class ProductList extends React.Component{

    render() {
        return(
            <div className={style.products}>

                {this.props.getDetails}



                <select>
                    <option selected={true}>{this.props.getProductActive()}</option>
                    <option>изделие 2</option>
                </select>
                <ul>
                    {this.props.getDetails().map(d=>{
                        return(
                            <li>
                                <NavLink to="/product/1" onClick={() => this.props.handleClickDetail(d.id)}>
                                    <label>{d.name}</label>
                                </NavLink>
                            </li>
                        )
                    })}

                    <li>
                        <NavLink to="/product/2" onClick={this.props.handleClickDetail}>
                            <label>2</label>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}