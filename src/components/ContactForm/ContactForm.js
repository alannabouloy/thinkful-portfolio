import React from 'react'
import './ContactForm.css'

export default function ContactForm(props){
    return(
        <form id='contact-form' action='https://formspree.io/xqkyrwpl' method='POST'>
            <div className='group'>
                <div className='item'>
                    <div className='label align-left'>
                        <label htmlFor='name'>
                            Name:
                        </label>
                    </div>
                    <div className='input align-left'>
                        <input name='name' id='name' type='text' placeholder='Beauregard Lionett' required/>
                    </div>
                    <div className='label align-left'>
                        <label htmlFor='email'>
                            Email:
                        </label>
                    </div>
                    <div className='input align-left'>
                        <input name='email' id='email' type='email' placeholder='thepunchingmonk@zadash.com' required/>
                    </div>
                    <div className='contact-msg'>
                        <p className='align-left'>
                            If you're interested in collaborating on a project, or if you have any questions
                            regarding past projects of mine, feel free to fill out this form and shoot me an 
                            email! I always respond to messages within 24hrs of receiving them.
                        </p>
                    </div>
                </div>
            

                <div className='item'>
                    <div className='label align-left'>
                        <label htmlFor='message'>Message:</label>
                    </div>
                    <div className='input align-left'>
                        <textarea id='message' name='message' required></textarea>
                    </div>
                    
                </div>
            </div>
            <div class='submit align-left'>
                <button type='submit'>Send Email</button>
            </div>
        </form>
    )
}