import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import cpp from '../../assets/images/cpplogo.png'
import py from '../../assets/images/pylogo.png'

const About = () => {
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
            Hello, I'm Ryan Montoyo. I am currently a rising senior at Hunter College pursuing a Bachelor's Degree in Computer Science. 
            I am a Full Stack Developer who is currently searching for Software Engineering internships. 
            As a passionate coder, I love bringing ideas to life through software solutions. Feel free to contact or connect with me!
            </p>
            <p>
            Hello, I'm Ryan Montoyo. I am currently a rising senior at Hunter College pursuing a Bachelor's Degree in Computer Science. 
            I am a Full Stack Developer who is currently searching for Software Engineering internships. 
            As a passionate coder, I love bringing ideas to life through software solutions. Feel free to contact or connect with me!
            </p>


        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={cpp} alt="c++ Logo" style={{ width: '50%', height: '50%' }}/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
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
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default About