import * as React from "react";
import Detail from "./Detail";
import style from "./Detail.module.css"
import DetailController from "../../../../controller/DetailController";
import {Link, NavLink} from "react-router-dom";
import OperationController from "../../../../controller/OperationController";


export default class DetailList extends React.Component{

    state = {
        details: []
    }

    constructor(props) {
        super(props);

        this.handleClickDetail = this.handleClickDetail.bind(this)
    }

    componentDidMount() {
        DetailController.byProduct(this.props.product).then(res=>{
            this.setState({
                details: res.data
            })
        })
    }

    handleClickDetail(value){
        this.props.setDetailActive(value)
    }

    handleChange = value => {

        this.setState({
            name: value.target.value
        })
    }

    handleSubmit = () =>{
        const detail = {
            value: this.state.name
        };
            DetailController.byName(detail.value).then(res=>{
                this.setState({details: res.data})})
    }


    render() {
        return(
            <dev>
                <div className={style.details}>
                    {this.state.details.map(d=>{
                        return(
                            <div className={style.detail}>
                                <NavLink to={"/detail/" + d.cipher} onClick = {() => this.handleClickDetail(d.cipher)} >
                                    <Detail name = {d.name}  cipher = {d.cipher}/>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </dev>
        )
    }
}