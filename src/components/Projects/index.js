import './index.scss'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import projectsData from '../../data/projects.json'

const Projects = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
    
    const renderProjects = (projects) => {
        return (
            <div className='images-container'>
                {
                    projects.map((port, idx) => {
                        return(
                            <div className='image-box' key={idx}>
                                <img src={port.cover} className='projects-image' alt='projects'></img>
                                <div className='content'> 
                                    <p className='title'>
                                        {port.title}
                                    </p>
                                    <h4 className='description'>
                                        {port.subtitle}
                                    </h4>
                                    <h4 className='description'>
                                        Stack: {port.description}
                                    </h4>
                                    {port.live && (
                                        <button className='btn' onClick={() => window.open(port.url)}>
                                            Live Demo
                                        </button>
                                    )}
                                    <button className='btn' onClick={() => window.open(port.git)}>
                                        Github
                                    </button>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        )
    }

    return (
        <>
        <div className='container projects-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={'My Projects'.split("")}
                    idx={12}
                />
            </h1>
            <div>
            {renderProjects(projectsData.portfolio)}
            </div>
        </div>
        <Loader type='ball-pulse-sync' ></Loader>
        </>
    )
}
export default Projects