import * as React from "react";
import axios from "axios";
import state, {addDetail} from "../stata";


const GetDetail = () =>{
    axios.get("http://localhost:8082/detail/byName",{params: {
            name: state.newDetail
        }})
        .then(res=>{
            const details = res.data
            details.map(d=> {
                state.details.push( {name: d.name, cipher: d.cipher})
            })
        })
}

export default GetDetail()


