import React from 'react';
import {Route} from "react-router-dom";
import EmployeeList from "./Employee/EmployeeList";
import General from "./General/General";
import Statistics from "./Statistacs/Statistics";
import PlanPage from "./Plan/PlanPage";
import style from "./Main.module.css";
import DetailPage from "./Details/DetailPage";
import ProductPage from "./Product/ProductPage";
import {getProducts} from "../Main/Plan/Product/PlanProductList"

export default class Main extends React.Component{

    state = {
        employees: [],
        productActive: null,
        products: []
    }

    constructor(props) {
        super(props);
        this.addProduct = this.addProduct.bind(this)
        this.getProductActive = this.getProductActive.bind(this)
        this.setProductActive = this.setProductActive.bind(this)

        this.getProducts = this.getProducts.bind(this)
    }


    getProducts(){
        return this.state.products
    }

    getProductActive(){
        return this.state.productActive
    }
    setProductActive(value){
        this.setState({
            productActive: value
        })
        debugger
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
                        getProductActive = {this.getProductActive}
                        setProductActive = {this.setProductActive}
                    />}/>
                    <Route path='/detail' render={() => <DetailPage
                        iaPlan = {this.updateIdPlan}
                    />}/>
                    <Route path='/product' render={() => <ProductPage
                        getProductActive = {this.getProductActive}
                    />}/>
                    <Route path='/employee' render={ () => <EmployeeList/>}/>
                    <Route path='/statistics' render={ () => <Statistics />}/>
                </div>
            </main>
        )
    }


}