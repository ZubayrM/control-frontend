import React from 'react';
import {NavLink, Route} from "react-router-dom";
import EmployeeList from "./Employee/EmployeeList";
import General from "./General/General";
import Statistics from "./Statistacs/Statistics";
import DetailList from "./Details/DetailList";
import PlanList from "./Plan/PlanList";
import ProductList from "./Product/ProductList";
import style from "./Main.module.css";
import Aside from "../Aside/Aside";

export default class Main extends React.Component{

    state = {
        idPlan: null,
        products: [
            {
                id: '1',
                name: 'product',
                cipher: '007'
            },
            {
                id: '2',
                name: 'product2',
                cipher: '009'
            }
        ]
    }

    constructor(props) {
        super(props);
    }

    updateIdPlan(value){
        this.setState({
            idPlan: value
        })
    }


    render() {
        return (
            <main className={style.main}>
                <div className={style.col1}>
                    <Route path='/main' render={() => <General />}/>
                    <Route path='/plan' render={ () => <PlanList />}/>
                    <Route path='/detail' render={() => <DetailList
                        iaPlan = {this.updateIdPlan}
                    />}/>
                    <Route path='/product' render={() => <ProductList />}/>
                    <Route path='/employee' render={ () => <EmployeeList/>}/>
                    <Route path='/statistics' render={ () => <Statistics />}/>
                </div>
                <div className={style.col2}>
                    <Aside product = {this.state.products} />
                </div>
            </main>
        )
    }


}