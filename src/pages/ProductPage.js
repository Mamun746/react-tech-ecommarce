import React from 'react'
import Products from '../components/productsPage/Products'
import Hero from '../components/Hero'
import ProductsBcg from '../images/productsBcg.jpeg'

export default function ProductPage() {
    return (
        <div>
        <Hero img={ProductsBcg}/>
            <Products/>
        </div>
    )
}
