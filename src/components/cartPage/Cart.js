import React from 'react'
import Title from '../Title'

import CartList from './CartList'
import CartTotal from './CartTotal'
import CartColumns from './CartColumns'

export default function Cart() {
    return (
        <div>
            <CartColumns/>
            <CartList/>
            <CartTotal/>
        </div>
    )
}
