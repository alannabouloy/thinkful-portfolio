import React from 'react'
import SmallHeading from '../SmallHeading/SmallHeading'
import './Project.css'

export default function Project(props){
    return(
        <div className='project'>
            <SmallHeading heading={props.currentProject.name}/>
            <img className='project-img' src={props.currentProject.img} alt='project thumbnail'/>
            <p className='project-desc'>{props.currentProject.desc}</p>
            <div className='project-stack'>
                <h4>Stack:</h4>
                    <ul className='stack-list'>
                        {props.stack}
                    </ul>
            </div>
        </div>
    )
}