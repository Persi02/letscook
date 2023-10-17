import './style.scss'
import React from 'react'

export default function Button(props) {
    const { postUser } = props;

    return (
        <button
            className={`btn ${props.className}`}
            type={props.type}
            onClick={postUser}
        >
            {props.text}
        </button>
    )
}
