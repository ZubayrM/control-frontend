import axios from "axios";
import * as React from "react";

const URL = "http://localhost:8083/operation"
const BY_DETAIL = "/byDetail"
class OperationController{

    byDetail(value){
        return axios.get(URL + BY_DETAIL + "/" + value)
    }


}

export default new OperationController