import React from 'react'
import './style.scss'
import Text from '../../General/text/Text'
import NextIcon from '../../icons/NextIcon'

export default function CardHero({ source }) {
    return (
        <div className='card_hero'>
            <figure>
                <img src={source} alt="" />
            </figure>
            <div className="body_card_hero">
                <Text className="text_hero" size="14px" tag="p" text="85% would make this again" />
                <Text className="text_hero" size="30px" tag="h2" text="Easy cheesecake" weight="600" color="white" />
                <Text className="text_hero" size="14px" tag="p" text="Inspired by Cheesecake Factory, this New York-style cheesecake is rich, dense yet creamy and not overly sweet" />

            </div>
            <div className='next_hero'>
                <div><NextIcon /></div>
            </div>
        </div>
    )
}
