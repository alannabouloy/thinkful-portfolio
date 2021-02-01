import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SectionHeading from '../SectionHeading/SectionHeading'
import ContactLinks from '../ContactLinks/ContactLinks'
import './ContactSection.css'

export default function ContactSection(props){
    return (
        <section className='contact'>
            <SectionHeading heading='Contact Me'/>
            <ContactForm/>    
            <ContactLinks/>
        </section>
    )
}