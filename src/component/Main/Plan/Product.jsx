import React from 'react';
import './PlanStyle.css'
import * as axios from "axios";

let get = () =>{
    axios.default.get("http://localhost:8082/detail/00502a9c-0490-4cc7-9c94-9635d0b51797").then(response => {
        debugger
        console.log(response)
    })
}


const Product = (props) => {



     return  (
        <div className='product'>
            <span>{props.name}</span>
            <progress value={props.value} max='100'/>
            <button onClick={get}/>
        </div>
     )
}

export default Product