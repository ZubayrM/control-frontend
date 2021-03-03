import * as React from "react";
import DetailInfo from "./DetailInfo";
import Operation from "./Operation";
import Detail from "../../Main/Details/Detail";
import DetailController from "../../../controller/DetailController";
import style from "./Info.module.css"


export default class DetailInfoList extends React.Component{

    state = {
        detail: {
            route: '',
            material: '',
            product: '',
            operations: []
        }
    }

    // constructor(props) {
    //     super(props);
    //     DetailController.getInfo(props.cipher).then(res =>{
    //         const d = res.data
    //         this.state.detail.route = d.route
    //         this.state.detail.material = d.material
    //         this.state.detail.product = d.product
    //         this.state.detail.operations = d.operations
    //     })
    // }


    render() {
        debugger
        return (
            <div className={style.info}>
                <div>
                    <DetailInfo route = {this.state.detail.route}
                            material = {this.state.detail.material}
                            product = {this.state.detail.product}
                    />
                </div>
                <div>
                    <span>операции:</span>
                </div>
                {this.state.detail.operations
                    .map(d => <Operation operation = {d}/>)}
            </div>
        )
    }
}

