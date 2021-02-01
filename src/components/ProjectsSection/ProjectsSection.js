import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Project from '../Project/Project'
import Pagination from '../Pagination/Pagination'
import './ProjectsSection.css'

export default function ProjectsSection(props){
    return(
        <section className='projects-page'>
            <div className='projects-intro'>
                <SectionHeading heading='My projects'/>
                <p>Here are some of the projects I'm working on.</p>
            </div>
            <Project currentProject={props.currentProject} stack={props.stack}/>
            <Pagination projects={props.projects} goToProject={props.goToProject}/>
        </section>
    )
}