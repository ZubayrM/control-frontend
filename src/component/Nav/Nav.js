import React,{ Component } from 'react';
import s from "./Nav.module.css"
import '../../App.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div>
                <NavLink to='/main' activeClassName={s.active}>Главгая</NavLink>
            </div>
            <div>
                <NavLink to='/plan' activeClassName={s.active}>План</NavLink>
            </div>
            <div>
                <NavLink to='/detail' activeClassName={s.active}>Детали</NavLink>
            </div>
            <div>
                <NavLink to='/employee' activeClassName={s.active}>Персонал</NavLink>
            </div>
            <div>
                <NavLink to='/statistics' activeClassName={s.active}>Статистика</NavLink>
            </div>
        </nav>
    )
}

export default Nav