import React from "react";
import s from './Post.module.css'

type propsType = {
    id: number
    message: string
    likeCurrent: number
}

export const Post = (props: propsType) => {
    return (
        <div className={s.item}>
            <img src={'https://cs3.livemaster.ru/zhurnalfoto/3/8/f/140723153856.jpg'} alt={'post'}/>
            {props.message}
            <div>
                <span>Like </span>
                {props.likeCurrent}
            </div>
        </div>
    )
}
