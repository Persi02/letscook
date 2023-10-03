import React from 'react'
import './style.scss'
import Text from '../../General/text/Text'

export default function CardRonded({ source, title }) {
    return (
        <article className='card_ronded'>
            <figure>
                <img src={source} alt="" />
            </figure>
            <Text tag='h3' text={title} weight="600" />
        </article>
    )
}
