import * as React from "react";
import PlanController from "../../../controller/PlanController"
import style from "./PlanPage.module.css";
import PlanList from "./Plan/PlanList";
import PlanProductList from "./Product/PlanProductList";
import PlanDetailList from "./Detail/PlanDetailList";
import {Route} from "react-router-dom";
import DetailController from "../../../controller/DetailController";
import DetailList from "../Details/ListDetail/DetailList";
import PlanDetail from "./Detail/PlanDetail";

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
            productActive: null,
            plans: [],
            details: []
        }
    }

    constructor(props) {
        super(props);

        this.setPlanActive = this.setPlanActive.bind(this)
        this.getPlanActive = this.getPlanActive.bind(this)
        this.addPlans = this.addPlans.bind(this)

        this.setDetail = this.setDetail.bind(this)
        this.getDetail = this.getDetail.bind(this)

        this.getProductActive = this.getProductActive.bind(this)
        this.setProductActive = this.setProductActive.bind(this)
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
    }

    getPlanActive(){
        return this.state.plan.planActive
    }

    getProductActive(){
        return this.state.plan.productActive
    }
    setProductActive(value){
        this.setState({
            plan: {
                productActive: value
            }
        })
    }

    setDetail(value){
        debugger
        DetailController.byProduct(value).then(result=>{
            console.log(result.data)
            this.setState({
                details: result.data
            })
        })
        debugger
    }

    getDetail(){
        return this.state.plan.details
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
                        <PlanProductList
                            active = {this.state.plan.planActive}
                            getPlan = {this.getPlanActive}
                            setDetail = {this.setDetail}

                        />
                    </Route>
                </div>
                <div>
                    <PlanDetailList
                        getDetail = {this.getDetail}
                    />
                </div>
            </div>
        )
    }

}