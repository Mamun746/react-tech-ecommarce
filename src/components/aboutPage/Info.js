import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'

function Info() {
    return (
        <section>
            <div className='container'>
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about" style={{ background: 'var(--darkGray)' }} />

                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us" />
                        <p className="text-lead text-muted">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                        <p className="text-lead text-muted">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                        <button className="main-link" type='button' style={{marginTop:'1rem'}}>More info</button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Info
