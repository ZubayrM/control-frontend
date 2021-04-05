import React from 'react';
import './Employee.module.css'

const Employee = (props) =>{
    return (
        <div className='employee'>
            <span className='name'>{props.name}</span>
            <span className='surname'>{props.surName}</span>
        </div>
    )
}

export default Employee

