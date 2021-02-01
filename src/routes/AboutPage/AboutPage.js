import React, { Component } from 'react'
import AboutSection from '../../components/AboutSection/AboutSection'
import Header from '../../components/Header/Header'
import './AboutPage.css'

export default class AboutPage extends Component {
    render(){
        return(
            <main>
                <Header className='about-header'/>
                <AboutSection/>
                <section className='contact'>
                    <h2>Contact Me</h2>
                    <form id='contact-form' action='https://formspree.io/xqkyrwpl' method='POST'>
                        <div className='group'>
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
                                <textarea id='message' name='message'></textarea>
                            </div>
                            <div class='submit align-left'>
                                <button type='submit'>Send Email</button>
                            </div>
                        </div>
                    </form>
                    <div className='links'>
                        <h3>Here are more linkes where you can reach me:</h3>
                        <div className='link-list'>
                            <ul className='links'>
                                <li><a href='https://github.com/alannabouloy' target='blank'>GitHub</a></li>
                                <li><a href='https://www.linkedin.com/in/alannabouloy/' target='blank'>LinkedIn</a></li>
                                <li><a href='mailto:lanihope@gmail.com'>Email</a></li>
                            </ul>
                        </div>

                        <p>You can also follow me on <a href='https://twitter.com/yerawizardlani' target='blank'>Twitter</a> to keep up with the latest news on my projects!</p>
                    </div>
                </section>
            </main>
        )
    }
}