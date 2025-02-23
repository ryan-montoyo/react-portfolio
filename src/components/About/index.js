import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSwift,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import cpp from '../../assets/images/cpplogo.png'
import py from '../../assets/images/pylogo.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [toggleAnimation, setToggleAnimation] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToggleAnimation((prev) => !prev);
    }, 10000); // Adjust the interval time as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const randomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  
  const createStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            right: `${randomBetween(0, 100)}vw`, // Random horizontal position
            top: `${randomBetween(0, 100)}vh`, // Random vertical position
          }}
        ></div>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello, I'm Ryan Montoyo. I am currently a senior at Hunter College pursuing a Bachelor's Degree in Computer Science. 
            I am a Full Stack Developer who is currently searching for Software Engineering internships. 
            <br></br>
            <br></br>
            As a passionate coder, I love bringing ideas to life through software solutions.
            I am also devoted to continuous learning and 'being a sponge' as much as I can as it makes me better and allows me to have larger contributions to all of my tasks. 
            </p>
            <p>
            Some of my techincal skills include: C++, Python, JavaScript, Swift/SwiftUI, HTML/CSS, Kotlin/Jetpack Compose, SQL, React, Flask, MySQL, Firebase and much more!
            <br></br>
            <br></br>
            Feel free to contact or connect with me!
            </p>


        </div>
        <div className='block'></div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={cpp} alt="c++ Logo" style={{ width: '50%', height: '50%' }}/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faSwift} color="#FA7343" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
                <img src={py} alt="python Logo" style={{ width: '50%', height: '50%' }}/>
            </div>
          </div>
        </div>
            <div className={`moving-stars-container ${toggleAnimation ? '' : 'second-wave'}`}>
            {/* Generate stars */}
            {createStars(200)}
        </div>
        <div className={`moving-stars-container ${toggleAnimation ? 'second-wave' : ''}`}>
            {/* Generate stars */}
            {createStars(200)}
        </div>
        <div style={{ height: '50vh' }}></div>
      </div>
      
    </>
  )
}

export default About