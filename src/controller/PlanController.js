import axios from "axios";

const URL = "http://localhost:8083/plan"
const BY_DATE = "/byDate"
const DOWNLOAD = "/download"

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
        return axios.get(URL + "/" + value)
    }

    download(value){
        return axios.post(URL + DOWNLOAD,  {
            headers: {
                'Content-Type': 'multipart/form-data',
                body:{
                    file: value
                }
            }

        })
    }

}

export default new PlanController