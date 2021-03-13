import * as React from "react";
import DetailController from "../../../controller/DetailController";
import Product from "../../Main/Plan/Product";

export default class PlanInfo extends React.Component{

    state = {
        idPlan: null,
        products: []
    }

    constructor(props) {
        super(props);
        // DetailController.byPlan(props.id).then(p=>{
        //     this.state.products = p;
        // })
    }

    componentDidMount() {


    }

    render() {
        return(
            <div>
                {this.props.product.map(p=>
                    {
                        return(
                            <Product
                                name = { p.name}
                                cipher = {p.cipher}
                            />
                        )
                    }

                )}
            </div>
        )
    }

}