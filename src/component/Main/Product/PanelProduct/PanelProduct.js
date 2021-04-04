import * as React from "react";
import style from "./PanelProduct.module.css"
import DetailController from "../../../../controller/DetailController";

export default class PanelProduct extends React.Component{

    state = {
        employee: null,
        count: null,
        result: null,

        employees: [],
        operations: [],

    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeEmployee = this.onChangeEmployee.bind(this)
        this.onChangeCount = this.onChangeCount.bind(this)
    }

    onSubmit(value){
        this.put()
        value.preventDefault()
    }

    onChangeEmployee(value){
        this.setState({
            employee: value.target.value
        })
    }

    onChangeCount(value){
        this.setState({
            count: value.target.value
        })
    }

    put(){
        DetailController.put({
            detailId: this.props.getDetail(),
            operation: this.props.getOperation(),
            employee: this.state.employee,
            count: this.state.count
        }).then()
    }


    render() {
        return(
            <div>
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
                                        {this.props.getOperations().map(o=>{
                                            return(
                                                <option value={o.id}>{o.name}</option>
                                            )
                                        })}
                                    </select>
                                </td>
                                <td>
                                    <select onChange={this.onChangeEmployee} className={style.name}>
                                        <option selected={true}>работник</option>
                                        {this.props.getEmployees().map(e=>{
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
}