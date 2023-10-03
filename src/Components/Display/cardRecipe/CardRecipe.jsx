import React from 'react'
import './style.scss'

const CardRecipe = ({ source }) => {
    return (
        <article className='recipe'>
            <figure>
                <img src={source} alt="" />
            </figure>
        </article>
    )
}

export default CardRecipe;