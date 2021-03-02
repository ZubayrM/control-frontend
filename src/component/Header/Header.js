import React from 'react';
import style from './Header.module.css'


const Header = () => {
    return (
        <header className={style.header}>
            {/*<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBG52Z6_0dVYnJr9MiAytXqieKs-x70E-Jw&usqp=CAU' />*/}
            <h1 className={style.h1}>Control</h1>
        </header>
    )
}
export default Header