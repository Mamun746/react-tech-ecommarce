import React from 'react'
import Hero from '../components/Hero'
import contactImg from '../images/contactBcg.jpeg'
import Contact from '../components/contactPage/Contact'

export default function ContactPage() {
    return (
        <div>
            <Hero img={contactImg}/>
            <Contact/>
        </div>
    )
}
