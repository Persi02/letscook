import React from 'react'

import './style.scss'
import Text from '../../General/text/Text'
import StatusCard from '../../General/statusCard/StatusCard'
import HalfRating from './StarsRating'

export default function CardFavorise({ source, title, status, statusText }) {

  return (
    <article className='card_favorise'>

      <figure>
        <img src={source} alt="" />
      </figure>
      <div className="body_card_favorise">
        <div className='card_stars'>
          <HalfRating />
        </div>
        <Text text={title} tag="h3" size='16px' weight="600" />
        <StatusCard text={statusText} className={status} />


      </div>
    </article>
  )
}
