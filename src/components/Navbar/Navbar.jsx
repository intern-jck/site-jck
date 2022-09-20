import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NavMenu from './NavMenu/NavMenu.jsx';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaHome, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import './Navbar.css';
import useWindowSize from '../../hooks/WindowContext/useWindowSize.js';

const Navbar = () => {
  const {width, height, orientation} = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='Navbar'>
      <ul className='nav-activity-bar'>
        <li>
          <button
            onClick={toggleMenu}>
            <GiHamburgerMenu className='nav-icons' size={60}
              style={showMenu ?
              {transform: 'rotate(90deg)'} : {transform: 'rotate(0deg)'}} />
          </button>
        </li>
        <li>
          <Link to='/'>
            <FaHome className='nav-icons' size={60} />
          </Link>
        </li>
        <li>
          <a href='https://github.com/intern-jck' target='_blank' rel='noreferrer'>
            <FaGithub className='nav-icons' size={60} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/justinckirk/' target='_blank' rel='noreferrer'>
            <FaLinkedin className='nav-icons' size={60} />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/makerinchief/' target='_blank' rel='noreferrer'>
            <FaInstagram className='nav-icons' size={60} />
          </a>
        </li>
      </ul>
      { showMenu ?
        <NavMenu menuHandler={toggleMenu} /> :
        null
      }
    </nav>
  );
};

export default Navbar;
