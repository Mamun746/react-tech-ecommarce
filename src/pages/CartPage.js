import React from 'react'
import Hero from '../components/Hero'
import cartBcg from '../images/storeBcg.jpeg'
import Cart from '../components/cartPage/Cart'

export default function CartPage() {
    return (
        <div>
        <Hero img={cartBcg}/>
            <Cart/>
        </div>
    )
}
