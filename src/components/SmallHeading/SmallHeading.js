import React from 'react'
import './SmallHeading.css'

export default function SmallHeading(props){
    return (
        <h3 className='smll-head'>
            {props.heading}
        </h3>
    )
}