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
        products: []


    }

    constructor(props) {
        super(props);

        this.getProductByPlanId = this.getProductByPlanId.bind(this)
    }

    componentDidMount() {
        PlanController.all().then(p=>{
            console.log(p)
            this.setState({plans: p.data})

        })
    }

    getProductByPlanId(value){
        debugger
        PlanController.byId(value).then(p=> {
            debugger
            this.props.addProduct(p.data.products)
        })
        debugger
    }

    render() {
        return(
            <div>
                {this.state.plans.map(p=> {
                    return (
                        <NavLink to={"/plan/" + p.id} className={style.a} onClick={() => this.getProductByPlanId(p.id)}>
                            <Plan id = {p.id} date = {p.startDate}/>
                        </NavLink>
                    )
                })}
            </div>
        )
    }

}