import React from "react";
import CartItems from "./CartItems";
import { ProductConsumer } from "../../context/context";
export default function CartList() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <ProductConsumer>
            {(value) => {
              const { cart, increment, decrement, removeItem } = value;

              if (cart.length === 0) {
                return (
                  <h1 className='text-center text-title my-4'>
                    Your Cart is Currently Empty
                  </h1>
                );
              }

              return (
                <div>
                  {cart.map((item) => (
                    <CartItems
                      key={item.id}
                      cartItem={item}
                      increment={increment}
                      decrement={decrement}
                      removeItem={removeItem}
                    />
                  ))}
                </div>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
      
    </div>
  );
}
