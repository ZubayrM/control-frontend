import React from 'react';
import '../../App.css'
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div>
                <NavLink to='/main' activeClassName={style.active}>Главная</NavLink>
            </div>
            <div>
                <NavLink to='/plan' activeClassName={style.active}>План</NavLink>
            </div>
            <div>
                <NavLink to='/product' activeClassName={style.active}>Изделия</NavLink>
            </div>
            <div>
                <NavLink to='/detail' activeClassName={style.active}>Детали</NavLink>
            </div>
            <div>
                <NavLink to='/employee' activeClassName={style.active}>Персонал</NavLink>
            </div>
            <div>
                <NavLink to='/statistics' activeClassName={style.active}>Статистика</NavLink>
            </div>
        </nav>
    )
}

export default Nav