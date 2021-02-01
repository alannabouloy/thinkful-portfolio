import React from 'react'
import { Link } from 'react-router-dom'
import './PageLink.css'

export default function PageLink(props){
    if(props.index === props.currentProject.index){
        return(
            <li id='current-project'>
                <Link to='#' onClick={e => props.goToProject(e, props.index)}>
                </Link>
            </li>
        )
    }
    return(
        <li>
            <Link to='#' onClick={e => props.goToProject(e, props.index)}>
            </Link>
        </li>
    )
}