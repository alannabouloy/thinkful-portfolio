import React from 'react'
import PageLink from '../PageLink/PageLink'
import './Pagination.css'

export default function Pagination(props){
    return(
        <div className='pagination'>
            <nav className='proj-nav'>
                <ul>
                    {props.projects.map((project, i) =>  <PageLink key={i} index={i} goToProject={props.goToProject}/>)}
                </ul>
            </nav>
        </div>
    )
}