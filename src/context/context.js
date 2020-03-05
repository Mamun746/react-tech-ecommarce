import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";

const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = {
    sideBarOpen: false,
    cartOpen: false,
    links: linkData,
    socialLinks: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = (products) => {
    const storeProducts = products.map((item) => {
      let { id } = item.sys;
      let image=item.fields.image.fields.file.url
      let product = { id, ...item.fields,image };
      return product;
    });
    const featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    },()=>{
      this.addTotals()
    });
  };
  // get local store cart
  getStorageCart = () => {
    let cart;
    if(localStorage.getItem('cart')){
      cart=JSON.parse(localStorage.getItem('cart'))
    }else{
      cart=[]
    }
    return cart
  };
  // get local store product
  getStorageProduct = () => {
   return localStorage.getItem('singleProduct')?JSON.parse(localStorage.getItem('singleProduct')):{}
  };
  // get totals
  getTotals = () => {
    let subTotal=0
    let cartItems=0
    this.state.cart.forEach(item=>{
      subTotal +=item.total
      cartItems+=item.count
    })
    subTotal=parseFloat(subTotal.toFixed(2));
    let tax=subTotal*0.2;
    tax=parseFloat(tax.toFixed(2));
    let total=subTotal+tax
    total=parseFloat(total.toFixed(2))
    return{
      cartItems,
      subTotal,
      tax,
      total

    }
  };

  // add totals
  addTotals = () => {
    const totals=this.getTotals()
    this.setState({
      cartItems:totals.cartItems,
      cartSubTotal:totals.subTotal,
      cartTax:totals.tax,
      cartTotal:totals.total
    })
  };
  // sync storage
  syncStorage = () => {
    localStorage.setItem('cart',JSON.stringify(this.state.cart))
  };
  // Add to cart

  addToCart = (id) => {
    let tempCart=[...this.state.cart]
    let tempProducts=[...this.state.storeProducts]
    let tempItem=tempCart.find(item=>item.id===id)
    if(!tempItem){
      tempItem=tempProducts.find(item=>item.id===id)
      let total=tempItem.price
      let cartItem={...tempItem,count:1,total}
      tempCart=[...tempCart,cartItem]
    }
    else{
      tempItem.count++
      tempItem.total=tempItem.price*tempItem.count
      tempItem.total=parseFloat(tempItem.total.toFixed(2))
    }
    this.setState(()=>{
      return{
        cart:tempCart
      }
    },()=>{
      this.addTotals()
      this.syncStorage()
      this.openCart()
    })
  };
  // Set single product
  setSingleProduct = (id) => {
    let product=this.state.storeProducts.find(item=>item.id===id)
    localStorage.setItem('singleProduct',JSON.stringify(product))
    this.setState({
      singleProduct:{...product},
      loading:false
    })
  };

  handleSideBar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    });
  };
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };

  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };
  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };
  // Cart functionality

  increment=(id)=>{
    console.log(id);
    

  }
  decrement=(id)=>{
    console.log(id);
    

  }
  removeItem=(id)=>{
    console.log(id);
    
  }
  clearCart=()=>{
    console.log('clear the cart');
    

  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSideBar: this.handleSideBar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
         increment:this.increment,
         decrement:this.decrement,
         removeItem:this.removeItem,
         clearCart:this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
