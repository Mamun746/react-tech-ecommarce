import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context/context'

export default function Footer() {
    return (
        <ProductConsumer>
            {value=>{
                return(
                    <FooterWrapper>
                    <div className="container py-3">
                    <div className='row'>
                    <div className="col-md-6">
                    <p className="text-capitalize">
                    copyright &copy; mamun store { new Date().getFullYear()}. all right reserved
                    </p>
                    
                    </div>
                    <div className="col-md-6 d-flex justify-content-around">
                    {value.socialLinks.map((link)=> <a href={link.url} key={link.id}>{link.icon}</a>)}
                    
                    </div>
                    
                    </div>
                    
                    
                    </div>
                    
                    </FooterWrapper>
                )

            }
        }
        </ProductConsumer>
    )
}

const FooterWrapper=styled.footer`
background:var(--darkGray);
color:#fff;

.icon{
    font-size:1.5rem;
    color:var(--mainWhite);
    transition:var(--mainTransition);
}

.icon:hover {
    color:var(--primaryColor);
    cursor: pointer;
}

`