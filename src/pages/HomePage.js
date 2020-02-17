import React from 'react'
import Home from '../components/Hero'
import {Link} from 'react-router-dom'
import Services from '../components/homePage/Services'
import Featured from '../components/homePage/Featured'

export default function HomePage() {
    return(
        <div>
        <Home title='Awesome Gadget' max="true">
        <Link to="/products" className="main-link" style={{margin:'2rem'}}>our products</Link>
        </Home>
        <Services/>
        <Featured/>
        </div>
    )
}
