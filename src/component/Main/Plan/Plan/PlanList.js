import * as React from "react";
import PlanController from "../../../../controller/PlanController";
import {NavLink} from "react-router-dom";
import Plan from "./Plan";
import style from "./Plan.module.css";

export default class PlanList extends React.Component {

    state = {
        plans: [],
    }


    constructor(props) {
        super(props);

        this.getProductByPlanId = this.getProductByPlanId.bind(this)
    }

    componentDidMount() {
        PlanController.all().then(p=>{
            //this.props.addPlan(p.data)
            this.setState({plans: p.data})
        })
    }

    getProductByPlanId(value){
        PlanController.byId(value).then(p=> {
            this.props.addProduct(p.data.products)
        })
    }

    render() {

        return(

            <div>
                {this.state.plans.map(result=>{
                    return(
                        <div>
                            <NavLink to={"/plan/" + result.startDate} className = {style.a} onClick = {()=> this.props.setActive(result.id)}>
                                <Plan  {...result} />
                            </NavLink>
                        </div>
                    )
                })}
            </div>

            // <div>
            //     {PlanController.all().then(result => {
            //         return (
            //             <div>
            //                 <NavLink to={"/plan/" + result.data.startDate} className = {style.a} onClick = {()=> this.props.setActive(result.data.id)}>
            //                     <Plan  {...result.data} />
            //                 </NavLink>
            //             </div>
            //         )
            //     })}
            // </div>
        )
    }
}