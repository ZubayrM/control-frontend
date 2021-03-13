import * as React from "react";
import Detail from "./Detail";
import style from "./Detail.module.css"
import DetailController from "../../../controller/DetailController";
import {Link} from "react-router-dom";


export default class DetailList extends React.Component{

    state = {
        details: [],
        name: ''
    }

    handleChange = value => {

        this.setState({
            name: value.target.value
        })
    }
    handleSubmit = () =>{

        debugger
        const detail = {
            value: this.state.name
        };
            DetailController.byName(detail.value).then(res=>{
                this.setState({details: res.data})})
    }

    render() {
        debugger
        return(
            <dev>
                <div className={style.panel}>
                    <input className={style.input} type='text' name='name' onChange={this.handleChange}/>
                    <Link to={"/detail"}>
                        <a className={style.button} onClick={this.handleSubmit}>поиск</a>
                    </Link>
                </div>

                { this.state.details.map(d => <Detail name={d.name} cipher={d.cipher} list={d.list} />)}
            </dev>
        )
    }
}