import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img
                src={'https://www.markakimlik.com/wp-content/uploads/2020/09/Markalasma-Surecinde-Logo-ve-Renk-Duzeni.jpg'}
                alt={'logo'}/>

            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} <button onClick={props.logout}>Log uot</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}