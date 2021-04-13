import * as React from "react";
import style from './PanelDetail.module.css'
import OperationController from "../../../../controller/OperationController";

export default class PanelDetail extends React.Component{

    state={
        operations: [],
        employees: []
    }


    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }


    onSubmit(value){
        this.put()
        value.preventDefault()
    }

    componentDidMount() {
        debugger

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        OperationController.byDetail(this.props.detail).then(res=>{
            this.setState({
                operations: res.data.operations
            })
        })
    }

    render(){
        if(this.props.detail){
            return(
                <div className={style.panel}>
                    <form onSubmit={this.onSubmit}>
                        <div className={style.operations}>
                            <table>
                                <caption>Назначить</caption>
                                <tr>
                                    <th>Операция</th>
                                    <th>Рабочий</th>
                                    <th>Колл</th>
                                </tr>
                                <tr>
                                    <td>
                                        <select className={style.name}>
                                            <option selected={true}>операция</option>

                                            {this.props.detail.operations.map(o=>{
                                                return(
                                                    <option value={o.id}>{o.name}</option>
                                                )
                                            })}
                                        </select>
                                    </td>
                                    <td>
                                        <select onChange={this.onChangeEmployee} className={style.name}>
                                            <option selected={true}>работник</option>
                                            {this.state.employees.map(e=>{
                                                return(
                                                    <option value={e.id}>{e.name}</option>
                                                )
                                            })}
                                        </select>
                                    </td>
                                    <td>
                                        <input onChange={this.onChangeCount}
                                               name="size" className={style.name}
                                               type="text" size={1}
                                               placeholder={this.props.getSize()}/>
                                    </td>
                                </tr>
                            </table>
                            <div className={style.button}>
                                <input type="submit" value="сохранить"/>
                            </div>

                        </div>

                    </form>
                </div>
            )
        }
        else return (
            <div></div>
        )
    }
}