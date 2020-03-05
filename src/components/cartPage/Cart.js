import React from 'react'
import Title from '../Title'

import CartList from './CartList'
import CartTotal from './CartTotal'
import CartColumns from './CartColumns'

export default function Cart() {
    return (
        <section className="py-5">
        <div className="container">
        <Title title='Yours cart items' center/>
        </div>
            <CartColumns/>
            <CartList/>
            <CartTotal/>
        </section>
    )
}
