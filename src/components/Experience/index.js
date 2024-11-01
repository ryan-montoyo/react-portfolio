import './index.scss'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import timelineData from '../../data/timeline.json'

const Career = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div className='container projects-page'>
                <h1 className='page-title'>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={'My Career'.split("")}
                        idx={12}
                    />
                </h1>
                <div className='timeline-container'>
                    {/* Central timeline line */}
                    <div className='timeline-line'></div>

                    {timelineData.map((event, index) => (
                        <div 
                            className={`timeline-event ${index % 2 === 0 ? 'even' : 'odd'}`} 
                            key={index}
                        >
                            <img src={event.image} alt={`${event.title} logo`} className='image' />
                            <div className='text-container'>
                                <div className='title'>{event.title}</div>
                                <div className='subtitle'>{event.organization}</div>
                                <div className='time'>{event.date}</div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
            <Loader type='ball-pulse-sync' />
        </>
    )
}

export default Career


