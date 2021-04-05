import axios from "axios";
import * as React from "react";

const URL = "http://localhost:8083/operation"
const BY_DETAIL = "/detail"
class OperationController{

    byDetail(value){
        return axios.get(URL + BY_DETAIL, {params:{
            "cipher": value
            }})
    }


}

export default new OperationController