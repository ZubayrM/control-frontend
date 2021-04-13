import * as React from "react";
import style from './ProductList.module.css'
import {NavLink} from "react-router-dom";
import PlanController from "../../../../controller/PlanController";
import ProductController from "../../../../controller/ProductController";

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
        PlanController.byId(this.props.plan).then(res=>{
            this.setState({
                products: res.data.products
            })
        })
   }

   handleClickProduct(value){
        this.props.setProductActive(value)
   }






    render() {

        return(
            <div className={style.products}>
                <div className={style.list}>
                    <ul>
                        {this.state.products.map(d=>{
                            return(
                                <li className={style.detail}>
                                    <NavLink to={"/product/" + d.cipher} onClick={() => this.handleClickProduct(d.id)}>
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