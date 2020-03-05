import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block my-5" >
           <div className="row">
           <div className="col-lg-2">
           <p className="text-uppercase">Products</p>
           </div>
           <div className="col-lg-2">
           <p className="text-uppercase">name of the product</p>
           </div>
           <div className="col-lg-2">
           <p className="text-uppercase">Price</p>
           </div>
           <div className="col-lg-2">
           <p className="text-uppercase">Quantity</p>
           </div>
           <div className="col-lg-2">
           <p className="text-uppercase">Remove</p>
           </div>
           <div className="col-lg-2">
           <p className="text-uppercase">Totals</p>
           </div>
           </div>
        </div>
    )
}
