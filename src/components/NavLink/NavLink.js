import React from 'react'
import { Link } from 'react-router-dom'
import './NavLink.css'

export default function NavLink(props){
    return (
        <li className={props.className}>
            <Link to={props.link}>
                {props.page}
            </Link>
        </li>
    )
}