import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import me from '../../../images/me.jpg'
import './AboutPage.css'

export default class AboutPage extends Component {
    render(){
        return(
            <main>
                <header className='about-header'>
                    <div className='heading'>
                        <h1>Alanna Bouloy</h1>
                    </div>
                    <nav className='about-nav'>
                        <ul>
                            <li className='active'>
                                <Link to='/about'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to='projects'>
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className='about-page'>
                    <h2>About Me</h2>
                    <img id='portrait' src={me} alt='me smiling with pink hair while wearing a beanie'/>
                    <div className='intro'>
                        <h3>A short introduction</h3>
                        <p>
                            I got my start with coffee, and I mean that literally. Before I was a Software
                            Engineer, I was a barista working at a Starbucks in Orlando, FL. Coding was just
                            a hobby I'd picked up after a late night in college with nothing to do but google
                            online Computer Science courses. But working at Starbucks made me realize that I
                            wanted the kind of career where I could work with others on fun and interesting projects
                            designed to change the world. That's when I stopped treating coding like a hobby and 
                            enrolled in Thinkful's Software Engineering Immersion Program. Now, I spend most days working
                            on the types of projects I used to dream about while adding foam to lattes and winding down 
                            with yoga or meeting up for an online DnD session with friends. 
                        </p>
                    </div>

                    <div className='experience'>
                        <h3>Experience</h3>
                        <p>
                            I started coding in college while freelancing with a local marketing agency managing websites
                            for clients and learning basic HTML and CSS. While enrolled in Thinkful's Software Engineering
                            Immersion Program, I worked on several independent full stack development projects using Node.js 
                            and React as my main frameworks. I have experience building out RESTful APIs using services and test
                            driven development, as well as building relational databases using PostgreSQL. I'm also proficient in 
                            HTML and CSS.
                        </p>
                    </div>

                    <div className='languages'>
                        <h3>Languages</h3>
                        <p>
                            I'm most comfortable working in JavaScript, but I also have experience with the following languages:
                        </p>
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Spanish</li>
                        </ul>
                    </div>
                </section>
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