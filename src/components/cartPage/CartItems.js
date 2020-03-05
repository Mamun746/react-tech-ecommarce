import React from "react";
import {
  FaTrash,
  FaChevronCircleDown,
  FaChevronCircleUp
} from "react-icons/fa";

export default function CartItems({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className='row mt-5 mt-lg-0 text-capitalize text-center align-items-center'>
      {/*image*/}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <img src={image} alt='product-img' width='60' className='img-fluid' />
      </div>
      {/*title*/}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>product : </span>
        {title}
      </div>
      {/*price*/}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>price : </span>${price}
      </div>

      {/*count control*/}
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <FaChevronCircleDown
            className='cart-icon text-primary'
            onClick={() => decrement(id)}
          />
          <span className='text-muted text-title mx-3'>{count}</span>
          <FaChevronCircleUp
            className='cart-icon text-primary'
            onClick={() => increment(id)}
          />
        </div>
      </div>
      {/*trash*/}
      <div className='col-10 mx-auto col-lg-2 '>
        <FaTrash
          className='text-danger cart-icon '
          onClick={() => removeItem(id)}
        />
      </div>
      {/*item total*/}
      <div className='col-10 mx-auto col-lg-2 '>
        <strong className='text-muted'>Item Total : {total}</strong>
      </div>
    </div>
  );
}
