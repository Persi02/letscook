import React from 'react'
import { Link } from 'react-router-dom'


export default function NavbarItems({ items, className }) {


    return (
        <>
            {items.map((item, idx) => (<Link to={item.link} className={className} key={idx}>{item.label}</Link>))}
        </>
    )
}
