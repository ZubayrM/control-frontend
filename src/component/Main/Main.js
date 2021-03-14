import React from 'react';
import {Route} from "react-router-dom";
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
        plans: [],
        products: [],
        details: [],
        employees: []
    }

    constructor(props) {
        super(props);

        this.addProduct = this.addProduct.bind(this)
    }

    addProduct(products) {

        this.setState({
            products: products
        })

        // this.setState(state => {
        //     return state.products.push(products)
        // })
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
                    <Route path='/plan' render={ () => <PlanList addProduct = {this.addProduct} />}/>
                    <Route path='/detail' render={() => <DetailList
                        iaPlan = {this.updateIdPlan}
                    />}/>
                    <Route path='/product' render={() => <ProductList />}/>
                    <Route path='/employee' render={ () => <EmployeeList/>}/>
                    <Route path='/statistics' render={ () => <Statistics />}/>
                </div>
                <div className={style.col2} key={this.state.idPlan}>
                    <Aside product = {this.state.products}  {...super.state} />
                </div>
            </main>
        )
    }


}