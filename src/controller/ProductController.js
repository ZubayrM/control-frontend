import axios from "axios";

const URL = "http://localhost:8083/product"

class ProductController{


    byId(value){
        return axios.get(URL + "/" + value)
    }

}

export default new ProductController()