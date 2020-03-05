import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import SingleProductImg from '../images/singleProductBcg.jpeg'
import {ProductConsumer} from '../context/context'


export default function SingleProductPage() {
    return (
        <div>
            <Hero img={SingleProductImg} title="single Product" alt="single Product"/>
            <ProductConsumer>
            {value=>{
                const {singleProduct,addToCart,loading}=value
               
                
                if(loading){
                    return <h1>Page loading...</h1>
                }
                const {title,description,company,id,price,image}=singleProduct
                return <section className="py-5">
                <div className="container">
                <div className="row">
                <div className="col-10 mx-auto col-sm-8 col-md-4 my-3">
                <img src={`../${image}`}
                // src={image}
                alt="single product" className="image-fluid"/>
                </div>
                <div className="col-10 mx-auto col-sm-8 col-md-8 my-3">
                <h5 className="text-title mb-4">model: {title}</h5>
                <h5 className='text-capitalize text-muted mb-4'>company :{company}</h5>
                <h5 className="text-main text-capitalize mb-4">Price: {price}</h5>
                <p className="text-capitalize text-title mt-3">some info about product :</p>
                <p>{description}</p>
                <button type="button" className="main-link" style={{margin:"0.75rem"}} onClick={()=>addToCart(id)}>
                add to cart
                </button>
                <Link to="/products" className="main-link" style={{margin:"0.75rem"}}>Back to Product</Link>
                </div>
                </div>
                </div>
                
                </section>
                
                
            }}
            </ProductConsumer>
        </div>
    )
}
