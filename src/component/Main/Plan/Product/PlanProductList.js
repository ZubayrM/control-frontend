import * as React from "react";
import {NavLink} from "react-router-dom";
import PlanProduct from "./PlanProduct";
import PlanController from "../../../../controller/PlanController";
import style from "./PlanProduct.module.css"

export default class PlanProductList extends React.Component {

    state = {
        products: [],
        active: null
    }

    constructor(props) {
        super(props);
        this.state.active = this.props.active

    }

    componentDidMount() {
        debugger
        PlanController.byId(this.props.active).then(p => {
            console.log(p.data)
            this.setState({
                products: p.data.products
            })
        })

    }



    render() {

        this.componentDidMount()
        return(
            <div className={style.page}>
                {this.state.products.map(p=> {
                    return (
                        <div onClick={()=> this.props.setDetail(p.id)} >
                            {/*<NavLink strict to={"/" + p.cipher} >*/}
                                <PlanProduct  {...p} />
                            {/*</NavLink>*/}
                        </div>
                    )
                })}
            </div>
        )
    }
}