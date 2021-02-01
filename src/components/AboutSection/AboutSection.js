import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import me from '../../images/me.jpg'
import './AboutSection.css'
import SmallHeading from '../SmallHeading/SmallHeading'

export default function AboutSection(props){
    return(
        <section className='about-page'>
            <SectionHeading heading='About Me'/>
            <img id='portrait' src={me} alt='woman smiling with pink hair while wearing a beanie'/>
            <div className='intro'>
                <SmallHeading heading='A short introduction'/>
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
                <SmallHeading heading='Experience'/>
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
                <SmallHeading heading='Languages'/>
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
    )
}