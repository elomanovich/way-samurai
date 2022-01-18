import React from "react";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={'https://www.markakimlik.com/wp-content/uploads/2020/09/Markalasma-Surecinde-Logo-ve-Renk-Duzeni.jpg'}
                alt={'logo'}/>
        </header>
    )
}