import axios from "axios";

const URL = "http://localhost:8083/operation"
const BY_OPERATION = "/byOperation"

class EmployeeController{

    byOperation(value){
        return axios.get(URL + BY_OPERATION + "/" + value)
    }

}

export default new EmployeeController