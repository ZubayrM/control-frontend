import * as React from "react";
import PlanController from "../../../controller/PlanController"
import Plan from "./Plan";
import {NavLink} from "react-router-dom";
import style from "./Plan.module.css";
import DetailController from "../../../controller/DetailController";

function extractedDate() {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }

    const date = new Date()
    const newDate = [pad(date.getFullYear()), pad(date.getMonth() + 1), '01'].join(`-`)
    return newDate;
}

export default class PlanList extends React.Component{

    state = {
        planActive: {
            id: null,
            date: null
        },
        plans: [],

    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        PlanController.all().then(p=>{
            console.log(p)
            debugger
            this.setState({plans: p.data})
        })
    }

    getProductByPlanId(value){
        DetailController.byPlan(value).then(product=> {
            this.setState({
                products: product.data
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.plans.map(p=> {
                    return (
                        <NavLink to={"/plan/" + p.id} className={style.a} onClick={this.getProductByPlanId.bind(p.id)}>
                            <Plan id = {p.id} date = {p.startDate}/>
                        </NavLink>
                    )
                })}
            </div>
        )
    }

}