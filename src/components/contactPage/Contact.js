import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='contact' />
          <form className='mt-5' action="https://formspree.io/abdullahalmamun914@gmail.com"
          method="POST">
            <div className='form-group'>
              <input
                type='text'
                name='firstName'
                className='form-control'
                placeholder='enter first name'
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='enter email'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='subject'
                className='form-control'
                placeholder='enter subject'
              />
            </div>

            <div className='form-group'>
              <textarea
                name='message'
                className='form-control'
                rows='5'
                placeholder='enter message'
              ></textarea>
            </div>

            <div className='form-group mt-3'>
              <input
                type='submit'
                
                className='form-control bg-primary text-white'
                value="Send"
              />
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
