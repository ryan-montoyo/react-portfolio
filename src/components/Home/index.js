import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/rm-logo.png';
import './index.scss';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import AnimatedLetters from '../AnimatedLetters';
import Drawing from './Drawing';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = [' ', 'R', 'y', 'a', 'n', ','];
    const jobArray = [
        'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ',
        'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'
    ];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const openResume = (event) => {
        event.preventDefault(); // Prevent the default behavior of the link
        window.open('/Ryan_Montoyo_Resume.pdf', '_blank');
    };

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    {/* <img src={LogoTitle} alt="developer"/> */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={8} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
                </h1>
                <h2>Fullstack Developer / Mobile Developer / Student </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                <Link to="#" onClick={openResume} className='flat-button'>MY RESUME</Link>
            </div>
            {/* <Logo /> */}
            <Drawing />
        </div>
    );
}

export default Home;