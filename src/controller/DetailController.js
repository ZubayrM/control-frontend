import axios from "axios";
import * as React from "react";

const URL = "http://localhost:8082/detail"
const BY_NAME = "/byName"
const BY_CIPHER =  "/byCipher"
const BY_EMPLOYEE = "/byEmployee"
const BY_PRODUCT = "/byProduct"


class DetailController{

    byName(value) {
        debugger
        return  axios.get(URL + BY_NAME, {params:{
                "name": value
                } }
            )
    }

    byCipher(value) {
        return  axios.get(URL + BY_CIPHER, {params: {
            "cipher": {value}
            }})
    }

    byEmployee(value){
         return axios.get(URL + BY_EMPLOYEE + "/" + value)
    }

    byProduct(value){
        return axios.get(URL + BY_PRODUCT + "/" + value)
    }

    add(value){
        return axios.post(URL, {value})
    }

    addAll(value){
        return axios.post(URL, {value})
    }

    put(value){
        return axios.put(URL, {value})
    }

    delete(value){
        return axios.delete(URL + "/" + {value})
    }

    getInfo(value){
        return axios.get(URL + "/" + {value})
    }

}

export default new DetailController