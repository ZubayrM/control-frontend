import * as React from "react";
import PlanDetail from "./PlanDetail";
import DetailController from "../../../../controller/DetailController";
import style from "./PlanDetail.module.css"
import {NavLink} from "react-router-dom";

export default class PlanDetailList extends React.Component{

    state = {
        details: [],
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.getProductActive() === this.props.getProductActive()){
            DetailController.byProduct(this.props.getProductActive()).then(result =>{
                this.setState({
                    details: result.data
                })
            })
            debugger

        }

    }


    render() {
        return(
            <div className={style.page}>
                {this.state.details.map(d=> {
                    debugger
                    return(
                        <NavLink to = {"/detail"}>
                            <PlanDetail {...d} />
                        </NavLink>

                    )
                })}
            </div>
        )
    }
}