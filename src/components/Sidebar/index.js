import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import RMLogo from '../../assets/images/website-icon.png'
import LogoS from '../../assets/images/logo-s.png'
import face from '../../assets/images/rm-logo.png'
import LogoSubtitle from '../../assets/images/rm-wordmark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faComputer, faLaptop, faLaptopCode, faFile, faFileCode, faFolderOpen, faBars, faClose, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useRef, useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
        <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={face} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className='experience-link'to="/experience">
                <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className='projects-link' to="/projects">
                <FontAwesomeIcon icon={faFolderOpen} color='#4d4d4e' />
            </NavLink>

            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className='contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>

            <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color='#1eb8ff' size='3x' className='close-icon'/>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ryan-montoyo/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/ryan-montoyo'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/ryan.montoyo/'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#1eb8ff' size='3x' className='hamburger-icon'/>
    </div>
    )
}

export default Sidebar