import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import RMLogo from '../../assets/images/website-icon.png'
import LogoS from '../../assets/images/logo-s.png'
import face from '../../assets/images/rm-logo.png'
import LogoSubtitle from '../../assets/images/rm-wordmark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faComputer, faLaptop, faLaptopCode, faFile, faFileCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={face} alt='logo' />
            {/* <img className='sub-logo' src={LogoSubtitle} alt='slobodan' /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='projects-link' to="/projects">
                <FontAwesomeIcon icon={faFolderOpen} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
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
    </div>
)

export default Sidebar