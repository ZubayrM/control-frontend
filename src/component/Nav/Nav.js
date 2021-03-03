import React from 'react';
import '../../App.css'
import './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div>
                <NavLink to='/main' >Главная</NavLink>
            </div>
            <div>
                <NavLink to='/plan'>План</NavLink>
            </div>
            <div>
                <NavLink to='/detail'>Детали</NavLink>
            </div>
            <div>
                <NavLink to='/employee'>Персонал</NavLink>
            </div>
            <div>
                <NavLink to='/statistics'>Статистика</NavLink>
            </div>
        </nav>
    )
}

export default Nav