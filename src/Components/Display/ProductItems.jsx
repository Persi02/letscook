import React from 'react'
import CardFavorise from './cardFavorise/CardFavorise'

export default function ProductItems({ products }) {
    return (
        <>
            {products.map((item, idx) => (<CardFavorise source={item.link} title={item.title} status={item.status} statusText={item.statusText} key={idx} />))}
        </>
    )
}
