import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react';
import Logo from './Logo';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['y', 'a', 'n']
    const jobArray = [
      'S',
      'o',
      'f',
      't',
      'w',
      'a',
      'r',
      'e',
      ' ',
      'E',
      'n',
      'g',
      'i',
      'n',
      'e',
      'e',
      'r',
      '.'
    ]
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        // Return a cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
      }, []);
      

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/> 
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18}/> 
                </h1>
                <h2>Fullstack Developer / Student </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home