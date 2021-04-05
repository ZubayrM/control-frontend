import * as React from "react";
import ProductList from "./ListProduct/ProductList";
import PanelProduct from "./PanelProduct/PanelProduct";
import style from "./ProductPage.module.css";
import DetailController from "../../../controller/DetailController";
import OperationController from "../../../controller/OperationController";
import EmployeeController from "../../../controller/EmployeeController";

export default class ProductPage extends React.Component{

    state = {
        detail: null,
        operation: null,
        details: [],
        operations: [],
        employees: [],
        size: null
    }

    constructor(props) {
        super(props);
        this.handleClickDetail = this.handleClickDetail.bind(this)
        this.getDetail = this.getDetail.bind(this)
        this.getDetails = this.getDetails.bind(this)
        this.getOperation = this.getOperation.bind(this)
        this.handleGetOperation = this.handleGetOperation.bind(this)
        this.handleGetEmployees = this.handleGetEmployees.bind(this)

        this.getOperations = this.getOperations.bind(this)
        this.getEmployees = this.getEmployees.bind(this)
        this.getSize = this.getSize.bind(this)
    }

    componentDidMount() {
        DetailController.byProduct(this.props.getProductActive()).then(result=>{
            this.setState({
                details: result.data
            })
        })
        console.log(this.state)
    }

    handleClickDetail(value){
        debugger
        this.setState({
            detail: value
        })
    }

    handleGetOperation(value){
        debugger
        OperationController.byDetail(value).then(result=>{
            debugger
            this.setState({
                operations: result.data
            })
        })
    }

    handleGetEmployees(value){
        EmployeeController.byOperation(value).then(result=>{
            this.setState({
                employees: result.data
            })
        })
    }

    handleGetSize(value){
        DetailController.countByOperation(value).then(result=>{
            this.setState({
                size: result.data
            })
        })
    }

    getDetail(){
        return this.state.detail
    }

    getDetails(){
        return this.state.details
    }

    getOperation(){
        return  this.state.operation
    }


    getOperations(){
        return this.state.operations
    }

    getEmployees(){
        return this.state.employees
    }

    getSize(){
        return this.state.size
    }


    render() {
        console.log(this.state.detail)
        return(
            <div className={style.form}>
                <div className={style.list}>
                    <ProductList
                        handleClickDetail = {this.handleClickDetail}
                        getDetails = {this.getDetails}
                        getProductActive = {this.props.getProductActive}
                        setOperation = {this.handleGetOperation}
                    />
                </div>
                <div className={style.panel}>
                    <PanelProduct
                        getDetail = {this.getDetail}
                        getOperation = {this.getOperation}


                        getDetails = {this.getDetails}
                        getOperations = {this.getOperations}
                        getEmployees = {this.getEmployees}
                        getSize = {this.getSize}
                    />
                </div>
            </div>
        )
    }
}