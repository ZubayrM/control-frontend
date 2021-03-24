import React from 'react';
import {Route} from "react-router-dom";
import EmployeeList from "./Employee/EmployeeList";
import General from "./General/General";
import Statistics from "./Statistacs/Statistics";
import DetailList from "./Details/DetailList";
import PlanPage from "./Plan/PlanPage";
import ProductList from "./Product/ProductList";
import style from "./Main.module.css";

export default class Main extends React.Component{

    state = {
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
                    <Route path='/plan' render={ () => <PlanPage
                        addPlan = {this.addPlans}
                        addProduct = {this.addProduct}
                        plan = {this.state.plan}
                    />}/>
                    <Route path='/detail' render={() => <DetailList
                        iaPlan = {this.updateIdPlan}
                    />}/>
                    <Route path='/product' render={() => <ProductList />}/>
                    <Route path='/employee' render={ () => <EmployeeList/>}/>
                    <Route path='/statistics' render={ () => <Statistics />}/>
                </div>
            </main>
        )
    }


}