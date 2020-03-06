import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";

export default function FilterProduct() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          min,
          max,
          company,
          shipping,
          price,
          handleChange,
          storeProducts
        } = value;
let companies=new Set()
companies.add('all')

for(let products in storeProducts){
    companies.add(storeProducts[products]["company"])

}
companies=[...companies];



        return (
          <div className='row py-5'>
            <FilterWrapper>
              {/*text search*/}
              <div>
                <label htmlFor='search'>Search Products</label>
                <input
                  type='text'
                  name='search'
                  value={search}
                  id='search'
                  className='filter-item'
                  onChange={handleChange}
                />
              </div>
              {/*category Search*/}
              <div>
                <label htmlFor='company'>Company</label>
                <select
                  name='company'
                  id='company'
                  className='filter-item'
                  value={company}
                  onChange={handleChange}
                >
                {/*
                  <option value='all'>all</option>
                  <option value='fuji'>fuji</option>
                  <option value='htc'>htc</option>
                  */}
                  {
                      companies.map((company,index)=>{
                          return <option key={index} value={company}>{company}</option>
                      })
                  }
                </select>
              </div>
              {/*price range*/}
              <div>
                <label htmlFor='price'>
                  <p className='mb-2'>
                    Product Price : <span>$ {price}</span>
                  </p>
                </label>
                <input
                  type='range'
                  name='price'
                  min={min}
                  max={max}
                  className='filter-price'
                  onChange={handleChange}
                  value={price}
                />
              </div>
              {/*free shipping*/}
              <div>
              <label htmlFor="shipping" className="mx-2">Free Shipping</label>
              <input type="checkbox" id="shipping" name="shipping" onChange={handleChange} checked={shipping && true}/>

              </div>
            </FilterWrapper>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
grid-column-gap:2rem;
grid-row-gap:1rem;

label{
    font-weight:bold;
    text-transform:capitalize;
}

.filter-item,.filter-price{
    display:block;
    width:100%;
    background:transparent;
    border:2px solid var(--darkGray);
    border-radius:0.5rem;
}

`;
