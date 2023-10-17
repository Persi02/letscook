import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

function SplideItem({ products }) {
    return (
        <Splide aria-label="My Favorite Images" options={{
            type: 'loop',
            perPage: 4,
            focus: 'left',
            gap: '30px'

        }}>
            {products.map((product, idx) => (
                <SplideSlide key={idx} >
                    <img src={product.link} alt="" />
                </SplideSlide>))}

        </Splide>
    )
}

export default SplideItem;

