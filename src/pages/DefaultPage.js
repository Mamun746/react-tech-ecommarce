import React from 'react'
import defaultBcg from '../images/defaultBcg.jpeg'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'

export default function DefaultPage() {
    return (
        <div>
           <Hero img={defaultBcg} title='404'>
           <h2 className="text-uppercase">Page not found</h2>
           <Link to="/" className="main-link" style={{marginTop:'2rem'}}>Go to home</Link>
           
           </Hero>
        </div>
    )
}
