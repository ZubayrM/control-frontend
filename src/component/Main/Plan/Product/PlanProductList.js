import * as React from "react";
import {NavLink} from "react-router-dom";
import PlanProduct from "./PlanProduct";
import PlanController from "../../../../controller/PlanController";
import style from "./PlanProduct.module.css"

export default class PlanProductList extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        var value = this.props.getPlan()
        debugger
        PlanController.byId(this.props.getPlan()).then(p => {
            debugger
            console.log(p.data)
            this.setState({
                products: p.data.products
            })
        })
        debugger
    }

    render() {
        debugger
        return(
            <div className={style.page}>
                {this.state.products.map(p=> {
                    return (
                        <div>
                            <NavLink to={"/plan/" + p.name} >
                                <PlanProduct  {...p} />
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        )
    }
}