import * as React from "react";
import axios from "axios";
import Detail from "./Detail";
import style from "./Detail.module.css"
import '../../../App.css'

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
    handleSubmit = value =>{
        debugger
        const detail = {
            name: this.state.name
        };
        axios.get("http://localhost:8082/detail/byName", {params:  {name: detail.name}} )
                .then(res=> {
                    const details = res.data;
                    this.setState({details})
                    debugger
                })
        debugger
    }

    // componentDidMount() {
    //     axios.get("http://localhost:8082/detail/byName", this.state.name)
    //         .then(res=> {
    //             const details = res.data;
    //             this.setState({details})
    //         })
    // }




    render() {
        return(
            <dev>
                <div className={style.panel}>
                    <input type='text' name='name' onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>поиск</button>
                </div>

                <br/>

                { this.state.details.map(d => <Detail name={d.name} cipher={d.cipher} list={d.list} />)}
            </dev>
        )
    }
}