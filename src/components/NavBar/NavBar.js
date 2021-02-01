import React from 'react'
import  NavLink  from '../NavLink/NavLink'
import './NavBar.css'

export default function NavBar(props){
    if(props.className === 'about-nav'){
        return(
            <nav className={props.className}>
                <ul>
                    <NavLink id='active' link='/' page='About'/>
                    <NavLink link='/projects' page='Projects'/>
                </ul>
            </nav>
        ) 
    }
    if(props.className === 'projects-nav'){
        return(
            <nav className={props.className}>
                <ul>
                    <NavLink link='/' page='About'/>
                    <NavLink id='active' link='/projects' page='Projects'/>
                </ul>
            </nav>
        )
    }
  
}
    