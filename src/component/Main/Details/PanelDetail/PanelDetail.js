import * as React from "react";

export default class PanelDetail extends React.Component{
    render() {
        return(
            <>
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
                        <td rowSpan="2">
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
            </>
        )
    }
}