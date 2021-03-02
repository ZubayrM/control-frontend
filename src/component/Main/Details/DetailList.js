import * as React from "react";
import Detail from "./Detail";
import style from "./Detail.module.css"
import '../../../App.css'
import DetailController from "../../../controller/DetailController";


const detailController = DetailController

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
            name: this.state.name
        };

        if (detail.name.contains(Number)){
            detailController.byCipher(detail.name).then(res=>{
                const details = res.data;
                this.setState({details})
            })

        }
        else {
            detailController.byName(detail.name).then(res=>{
                const details = res.data;
                this.setState({details})
            })
        }



    }

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