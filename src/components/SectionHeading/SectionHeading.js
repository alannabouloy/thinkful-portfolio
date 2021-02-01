import React from 'react'
import './SectionHeading.css'

export default function SectionHeading(props){
    return(
        <h2 className='section-head'>
            {props.heading}
        </h2>
    )
}