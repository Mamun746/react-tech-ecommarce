import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import DefaultPage from './pages/DefaultPage'
import ProductPage from './pages/ProductPage'
import SingleProductPage from './pages/SingleProductPage'

// Components
import Navbar from './components/Navbar'
import SideBar from './components/Sidebar'
import SideCart from './components/SideCart'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <SideBar/>
    <SideCart/>
    <Switch>
    <Route path='/' exact component={HomePage}/>
    <Route path='/about'   component={AboutPage}/>
    <Route path='/cart'  component={CartPage}/>
    <Route path='/contact'  component={ContactPage}/>
    <Route path='/products' exact component={ProductPage}/>
    <Route path='/products/:id'  component={SingleProductPage}/>
    <Route  component={DefaultPage}/>
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
