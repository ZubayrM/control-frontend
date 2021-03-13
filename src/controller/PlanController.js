import axios from "axios";

const URL = "http://localhost:8082/plan"
const BY_DATE = "/byDate"

class PlanController{

    byStartDate(date){
        return  axios.get(URL + BY_DATE, {params:{
            date: date
            }})
    }

    all(){
        return axios.get(URL)
    }

    byId(value){
        return axios.get(URL + value)
    }

}

export default new PlanController