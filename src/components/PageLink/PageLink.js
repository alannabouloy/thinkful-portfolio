import React from 'react'
import { Link } from 'react-router-dom'
import './PageLink.css'

export default function PageLink(props){
    return(
        <li>
            <Link to='#' onClick={e => props.goToProject(e, props.index)}>
                0
            </Link>
        </li>
    )
}