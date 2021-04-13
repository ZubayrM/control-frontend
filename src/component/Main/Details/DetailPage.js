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
                    <DetailList
                        product = {this.props.productActive}
                        setDetailActive = {this.props.setDetailActive}
                    />
                </div>
                <div className={style.panel}>
                    <PanelDetail detail = {this.props.detailActive}/>
                </div>

            </div>
        )
    }

}