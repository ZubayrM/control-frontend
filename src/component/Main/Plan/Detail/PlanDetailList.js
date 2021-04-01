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
        debugger
        if (true){
            DetailController.byProduct(this.props.getProductActive()).then(result =>{
                this.setState({
                    details: result.data
                })
            })
            debugger

        }

    }


    render() {
        debugger
        return(
            <div className={style.page}>
                {this.state.details.map(d=> {
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