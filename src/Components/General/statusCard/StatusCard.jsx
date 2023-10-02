import React from 'react'
import './style.scss'

export default function StatusCard({ text, className }) {
    return (
        <div className={`status_card ${className}`}  > {text}</div >
    )
}
