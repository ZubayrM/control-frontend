import * as React from "react";
import PlanDetail from "./PlanDetail";

export default class PlanDetailList extends React.Component{

    state = {
        details: []
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        this.setState({
            details: this.props.getDetail()
        })
    }


    render() {
        debugger
        return(
            <div>
                {this.state.details.map(d=> {
                    return(
                        <PlanDetail {...d} />
                    )
                })}
            </div>
        )
    }
}