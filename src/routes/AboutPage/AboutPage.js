import React, { Component } from 'react'
import AboutSection from '../../components/AboutSection/AboutSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import Header from '../../components/Header/Header'
import './AboutPage.css'

export default class AboutPage extends Component {
    render(){
        return(
            <main>
                <Header className='about-header'/>
                <AboutSection/>
                <ContactSection/>
            </main>
        )
    }
}