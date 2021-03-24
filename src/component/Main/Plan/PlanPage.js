import * as React from "react";
import PlanController from "../../../controller/PlanController"
import style from "./PlanPage.module.css";
import PlanList from "./Plan/PlanList";
import PlanProductList from "./Product/PlanProductList";
import PlanDetailList from "./Detail/PlanDetailList";
import {Route} from "react-router-dom";

// function extractedDate() {
//     function pad(s) {
//         return (s < 10) ? '0' + s : s;
//     }
//
//     const date = new Date()
//     const newDate = [pad(date.getFullYear()), pad(date.getMonth() + 1), '01'].join(`-`)
//     return newDate;
// }

export default class PlanPage extends React.Component{

    state = {
        plan: {
            planActive: null,
            plans: [],
            details: []
        }
    }

    constructor(props) {
        super(props);

        this.setPlanActive = this.setPlanActive.bind(this)
        this.getPlanActive = this.getPlanActive.bind(this)
        this.addPlans = this.addPlans.bind(this)
    }

    addPlans(plans){
        this.setState(
            {
                plan:{
                    plans: plans
                }
            }
        )
    }


    setPlanActive(value){
        console.log(value)
        this.setState({
            plan: {
                planActive: value
            }
        })
        debugger
    }

    getPlanActive(){
        return this.state.plan.planActive
    }

    render() {


        return(
            <div className={style.page}>
                <div className={style.plan}>
                    <PlanList
                        addPlan = {this.addPlans}
                        setActive = {this.setPlanActive}
                        plan = {this.state.plan}
                    />
                </div>

                {/*<Route path={"/plan/*"} render={()=> <PlanProductList getPlan = {this.getPlanActive}/>}/>*/}
                <div className={style.product}>
                    <Route path={"/plan/*"}>
                        <PlanProductList getPlan = {this.getPlanActive}/>
                    </Route>
                </div>

                    {/*<div className={style.product}>*/}
                {/*    <PlanProductList product = {this.props.plan.products}/>*/}
                {/*</div>*/}
                {/*<div className={style.detail}>*/}
                {/*    <PlanDetailList {...this.props} />*/}
                {/*</div>*/}
            </div>
        )
    }

}