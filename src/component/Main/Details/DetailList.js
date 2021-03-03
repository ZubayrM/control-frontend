import * as React from "react";
import Detail from "./Detail";
import style from "./Detail.module.css"
import DetailController from "../../../controller/DetailController";
import Nav from "../../Nav/Nav";
import {Link, NavLink} from "react-router-dom";



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
        const detail = {
            value: this.state.name
        };

        // if (detail.name.contains(Number)){
        //     detailController.byCipher(detail.name).then(res=>{
        //         const details = res.data;
        //         this.setState({details})
        //     })
        //
        // }
        // else {
            DetailController.byName(detail.value).then(res=>{
                this.setState({details: res.data})
            }
            )
        // }
    }

    render() {
        return(
            <dev>
                <div className={style.panel}>
                    <input className={style.input} type='text' name='name' onChange={this.handleChange}/>
                    <Link>
                        <a className={style.button} onClick={this.handleSubmit}>поиск</a>
                    </Link>
                </div>

                <br/>

                { this.state.details.map(d => <Detail name={d.name} cipher={d.cipher} list={d.list} />)}
            </dev>
        )
    }
}