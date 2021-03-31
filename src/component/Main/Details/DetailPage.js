import * as React from "react";
import Detail from "./ListDetail/Detail";
import DetailList from "./ListDetail/DetailList";
import PanelDetail from "./PanelDetail/PanelDetail";
import style from "./DetailPage.module.css"

export default class DetailPage extends React.Component{


    render() {
        return(
            <div className={style.page}>
                <div className={style.list}>
                    <DetailList iaPlan = {this.props.iaPlan}/>
                </div>
                <div className={style.panel}>
                    <PanelDetail />
                </div>

            </div>
        )
    }

}