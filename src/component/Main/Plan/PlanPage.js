import * as React from "react";
import style from "./PlanPage.module.css";
import PlanList from "./Plan/PlanList";
import PlanProductList from "./Product/PlanProductList";
import PlanDetailList from "./Detail/PlanDetailList";
import {Route} from "react-router-dom";
import DetailController from "../../../controller/DetailController";
import PlanController from "../../../controller/PlanController";

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
        },
        file: null

    }

    constructor(props) {
        super(props);

        this.setPlanActive = this.setPlanActive.bind(this)
        this.getPlanActive = this.getPlanActive.bind(this)
        this.addPlans = this.addPlans.bind(this)

        this.setDetail = this.setDetail.bind(this)
        this.getDetail = this.getDetail.bind(this)

        this.onSubmit = this.onSubmit.bind(this)

        this.setFile = this.setFile.bind(this)

    }

    setFile(value){
        this.setState({
            file: value.target.value
        })
    }

    onSubmit(value){
        debugger
        PlanController.download({file: this.state.file} ).then(res=>{
            console.log(res)
        })

        value.preventDefault()
    }

    addPlans(plans){
        this.setState(
            {

                    plans: plans

            }
        )
    }


    setPlanActive(value){
        this.setState({

            plan: {
                planActive: value
            }



        })
    }

    getPlanActive(){
        return this.state.plan.planActive
    }


    setDetail(value){
        DetailController.byProduct(value).then(result=>{
            console.log(result.data)
            this.setState({
                details: result.data
            })
        })
    }

    getDetail(){
        const data = this.state.plan.details
        return data
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
                            setActive = {this.props.setProductActive}

                        />
                    </Route>
                </div>
                <div className={style.detail}>
                    <PlanDetailList
                        getDetail = {this.getDetail}
                        getProductActive={this.props.getProductActive}
                    />
                </div>

                <div className={style.addFile}>
                    <form  onSubmit={this.onSubmit}>
                        <input onChange={this.setFile} name="file" type="file"/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }

}