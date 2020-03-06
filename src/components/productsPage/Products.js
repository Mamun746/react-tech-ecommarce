import React from 'react'
import Title from '../Title'
import {ProductConsumer} from '../../context/context'
import Product from '../Product'
import FilterProduct from './FilterProduct'

export default function Products() {
    return (
        <ProductConsumer>
            {
                value=>{
                    const {filteredProducts}=value
                    return <section className="py-5">
                    <div className="container">
                    <Title title='our products' center/>
                    {/*Product Filter*/}
                    <FilterProduct/>
                    {/*Total count*/}
                    <div className="row mx-auto">
                    <h6 className="text-title">Total Products :{filteredProducts.length}</h6>
                    </div>
                    <div className='row py-5'>
                    {
                        filteredProducts.length===0?(
                            <div className="col text-title text-center">
                            sorry,no items match your search 
                            </div>
                        )
                        :(filteredProducts.map((product)=>{
                                return <Product key={product.id} product={product}/>
                        }))
                    }                    
                    </div>
                    </div>
                    
                    </section>
                }
            }
        </ProductConsumer>
    )
}
