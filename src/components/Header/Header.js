import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'

export default function Header(props){
    let navBar
    if(props.className === 'about-header'){
        navBar = <NavBar className='about-nav'/>
    }
    if(props.className === 'projects-header'){
        navBar = <NavBar className='projects-nav'/>
    }
    return (
        <header className={props.className}>
            <div className='heading'>
                <h1>Alanna Bouloy</h1>
            </div>
            {navBar}      
        </header>
    )
}