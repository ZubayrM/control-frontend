import * as React from "react";
import Detail from "./Detail";
import style from "./Detail.module.css"
import DetailController from "../../../../controller/DetailController";
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
                <div>
                    <select className={style.select1}>
                        <option>План: {this.props.active}</option>
                    </select>
                </div>
                <div>
                    <select className={style.select2}>
                        <option>Изделие: </option>
                    </select>
                </div>

                <div className={style.panel}>
                    <input className={style.input} type='text' name='name' onChange={this.handleChange}/>
                    <Link to={"/detail"}>
                        <a className={style.button} onClick={this.handleSubmit}>поиск</a>
                    </Link>
                </div>

                <div>
                    <table className={style.table}>
                        <tr>
                            <th>Наименование</th>
                            <th>Обозначение</th>
                            <th>Кол-во</th>
                        </tr>
                        <tr>
                            <td><a href='/'>Имя</a></td>
                            <td><a href='/'>Шифр</a></td>
                            <td><a href='/'>27</a></td>
                        </tr>
                        <tr>
                            <td><a href='/'>Имя</a></td>
                            <td><a href='/'>Шифр</a></td>
                            <td><a href='/'>27</a></td>
                        </tr>
                        <tr>
                            <td><a href='/'>Имя</a></td>
                            <td><a href='/'>Шифр</a></td>
                            <td><a href='/'>27</a></td>
                        </tr>
                    </table>
                </div>
                { this.state.details.map(d => <Detail name={d.name} cipher={d.cipher} list={d.list} />)}
            </dev>
        )
    }
}