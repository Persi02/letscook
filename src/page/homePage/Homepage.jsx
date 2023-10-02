
import CardHero from '../../Components/Display/cardHero/CardHero'
import './style.scss'
import React from 'react'
import Gateaux from '../../assets/image/gateaux.jpg'
import CardFavorise from '../../Components/Display/cardFavorise/CardFavorise'
import Burger from '../../assets/image/burger.jpg'
import Pizza from '../../assets/image/pizza.jpg'
import Chalade from '../../assets/image/chalade.jpg'
import Beur from '../../assets/image/beur.jpg'
import Fruit from '../../assets/image/fruit.jpg'
import Multi from '../../assets/image/multi.jpg'
import ProductItems from '../../Components/Display/ProductItems'




export default function Home() {
    const productesFavoris = [
        { link: Burger, title: "Cheese burger", status: "public", statusText: "Public" }
        ,

        { link: Pizza, title: "Mac & Cheese", status: "public", statusText: "Public" }
        ,

        { link: Chalade, title: "Salad caesar with chicken", status: "private", statusText: "Private" }
        ,

        { link: Beur, title: "Caramel pots", status: "public", statusText: "Public" }
        ,

        { link: Multi, title: "Caramel pots", status: "private", statusText: "Private" }
        ,
        { link: Fruit, title: "Caramel pots", status: "public", statusText: "Public" }]
    return (
        <main>
            <section className='section_hero'>
                <div className='wrap d-flex'>
                    <div className='wrap_hero'>
                        <CardHero source={Gateaux} />
                    </div>
                </div>
            </section>
            <section className='section_favorise'>
                <ProductItems products={productesFavoris} />
            </section>
        </main>

    )
}
