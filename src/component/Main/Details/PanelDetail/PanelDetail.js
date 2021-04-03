import * as React from "react";
import style from './PanelDetail.module.css'

export default class PanelDetail extends React.Component{
    render() {
        return(
            <div className={style.panel}>
                <table>
                    <tr>
                        <th>Операция</th>
                        <th>Исполнитель</th>
                        <th>В работу</th>
                    </tr>
                    <tr>
                        <td>Токарная</td>
                        <td>
                            <select>
                                <option>Магомедов</option>
                                <option>Мамедов</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" size='3' placeholder='0'/>
                        </td>
                    </tr>
                    <tr>
                        <td>Фрезерная</td>
                        <td>
                            <select>
                                <option>Магомедов</option>
                                <option>Мамедов</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <br/>
                <button>Сохранить</button>
            </div>
        )
    }
}