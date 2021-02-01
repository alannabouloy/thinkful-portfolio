import React from 'react'
import './ContactLinks.css'

export default function ContactLinks(props){
    return(
        <div className='contact-links'>
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
    )
}