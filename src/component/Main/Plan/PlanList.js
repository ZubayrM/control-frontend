import * as React from "react";
import PlanController from "../../../controller/PlanController"
import Plan from "./Plan";
import {NavLink} from "react-router-dom";

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
        planActive: null,
        plans: []
    }

    constructor(props) {
        super(props);

        PlanController.byStartDate(extractedDate()).then(p=>{
            const date = p.data.startDate
            this.setState({
                planActive: date
            }
            )
        })

    }

    render() {
        debugger
        return(
            <div>
                    <Plan date = {this.state.planActive}  />
            </div>
        )
    }

}