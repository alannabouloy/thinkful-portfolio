import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import SmallHeading from '../../components/SmallHeading/SmallHeading'
import scribe from '../../images/scribe-app.png'
import maestro from '../../images/maestro-app.png'
import unionize from '../../images/unionize-app.png'
import { Link } from 'react-router-dom'
import './ProjectsPage.css'
import Project from '../../components/Project/Project'
import Pagination from '../../components/Pagination/Pagination'
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection'

export default class ProjectsPage extends Component {
    state = {
        projects: [
            {
                name: 'Scribe DnD Campaign Manager',
                desc: 'Scribe is a campaign management app for RPG games that helps you to keep track of notes taken during a campaign. You can add new campaigns and update old campaigns with new notes as you play.',
                img: scribe,
                stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL']
            },
            {
                name: 'Maestro Language Learning App',
                desc: `Maestro is a language learning application that uses the science of spaced repetition to help users improve their language skills. Users are tested on their knowledge of words and the better they know a word, the less frequently they'll be tested on it.`,
                img: maestro,
                stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL']
            },
            {
                name: 'Unionize',
                desc: `Unionize helps you to find a union that works for you. You can search through our list of acredited unions, and even filter based on the industry or a specific search term. If you can't find a union that fits, the app also provides a link to resources for starting your own union.`,
                img: unionize,
                stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL']
            }
        ],
        currentProject: {
            name: '',
            desc: '',
            img: '',
            stack: []
        },
    }

    componentDidMount(){
        const currentProject = this.state.projects[0]
        this.setState({currentProject})
    }

    goToProject = (e, index) => {
        e.preventDefault()
        const currentProject = this.state.projects[index]
        this.setState({currentProject})
    }

    render(){
        const currentProject = this.state.currentProject
        const stack = currentProject.stack.map((item, i) => <li key={i}>{item}</li>)
        return(
            <main className='projects'>
                <Header className='projects-header'/>
                <ProjectsSection 
                    projects={this.state.projects}
                    currentProject={currentProject}
                    stack={stack}
                    goToProject={this.goToProject}
                />
            </main>
        )
    }
}