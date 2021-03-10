import React from 'react';
import './Plan.module.css'
import * as axios from "axios";


const Product = (props) => {



     return  (
        <div className='product'>
            <span>{props.name}</span>
            <span>{props.cipher}</span>
            <progress value={20} max='100'/>
            <button />
        </div>
     )
}

export default Product