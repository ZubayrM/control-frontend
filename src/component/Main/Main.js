import React from 'react';
import {Route} from "react-router-dom";
import General from "./General/General";
import Statistics from "./Statistacs/Statistics";
import PlanPage from "./Plan/PlanPage";
import style from "./Main.module.css";
import DetailPage from "./Details/DetailPage";
import ProductPage from "./Product/ProductPage";
import PlanController from "../../controller/PlanController";
import {EmployeePage} from "./Employee/EmployeePage";

export default class Main extends React.Component{

    state = {
        employees: [],
        productActive: null,
        products: [],
        plan:{
            planActive: null,
            plans: [],
            products: []
        }
    }

    constructor(props) {
        super(props);
        this.addProduct = this.addProduct.bind(this)
        this.getProductActive = this.getProductActive.bind(this)
        this.setProductActive = this.setProductActive.bind(this)

        this.getProducts = this.getProducts.bind(this)

        this.handleGetPlans = this.handleGetPlans.bind(this)
    }

    handleGetPlans(){
        PlanController.all().then(res=>{
            this.setState({
                plan:{
                    plans: res.data
                }
            })
        })
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
                    <Route path='/employee' render={ () => <EmployeePage/>}/>
                    <Route path='/statistics' render={ () => <Statistics />}/>
                </div>
            </main>
        )
    }


}