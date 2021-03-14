import * as React from "react";
import DetailController from "../../../controller/DetailController";
import Product from "../../Main/Plan/Product";
import style from "./PlanInfo.module.css"
import PerfectScrollbar from 'react-perfect-scrollbar'

export default class PlanInfo extends React.Component{

    state = {
        idPlan: null
    }

    constructor(props) {
        super(props);
        // DetailController.byPlan(props.id).then(p=>{
        //     this.state.products = p;
        // })
    }

    componentDidMount() {


    }

    render() {
        debugger
        return(
            <div className={style.planInfo}>
                    {this.props.product.map(p=>
                        {
                            return(
                                <Product
                                    name = { p.name}
                                    cipher = {p.cipher}
                                />
                            )
                        }

                    )}
            </div>
        )
    }

}