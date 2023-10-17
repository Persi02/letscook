import React from 'react'
import CardFavorise from '../cardFavorise/CardFavorise'
import CardRonded from './CardRonded'

export default function RondedIteration({ items }) {
    return (
        <>
            {items.map((item, idx) => (<CardRonded key={idx} source={item.link} title={item.title} />))}
        </>
    )
}
