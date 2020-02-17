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
    loading: false
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
    });
  };
  // get local store cart
  getStorageCart = () => {
    return [];
  };
  // get local store product
  getStorageProduct = () => {
    return {};
  };
  // get totals
  getTotals = () => {};

  // add totals
  addTotals = () => {};
  // sync storage
  syncStorage = () => {};
  // Add to cart

  addToCart = (id) => {
    console.log(id);
  };
  // Set single product
  setSingleProduct = (id) => {
    console.log(id);
  };

  handleSideBar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    });
  };
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.sideBarOpen
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
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
