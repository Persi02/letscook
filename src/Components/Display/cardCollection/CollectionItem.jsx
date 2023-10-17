import React from 'react'
import CardCollection from './CardCollection';

function CollectionItem({ items }) {
    return (
        <>
            {items.map((item, idx) => (<CardCollection source={item.link} key={idx} />))}
        </>
    )
}

export default CollectionItem;