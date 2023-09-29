import React from 'react'
import './style.scss';

export default function Input(props) {

    return (
        <input type={props.text} placeholder={props.placeholder} className={`input_ladin ${props.className}`} />
    )
}