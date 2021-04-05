import * as React from "react";
import style from './ProductList.module.css'
import {NavLink} from "react-router-dom";
import PlanController from "../../../../controller/PlanController";

export default class ProductList extends React.Component{

    state = {
        plan: null,
        plans:[],
        products: []
    }

    constructor(props) {
        super(props);

    }

   componentDidMount() {
        PlanController.all().then(result=>{
            this.setState({
                plans: result.data
            })
        })
   }


    render() {
        debugger
        return(
            <div className={style.products}>
                <select className={style.select}>
                    {this.state.products.map(p=>{
                        return(
                            <option>{p.name + " " + p.cipher}</option>
                        )
                    })}

                </select>
                <div className={style.list}>
                    <ul>
                        {this.props.getDetails().map(d=>{
                            debugger
                            return(
                                <li className={style.detail}>
                                    <NavLink to={"/product/" + d.cipher} onClick={() => this.props.setOperation(d.cipher)}>
                                        <label>{d.name}</label>
                                        <label>{d.cipher}</label>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        )
    }

}