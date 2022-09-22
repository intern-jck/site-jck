import React, {useState, useEffect} from 'react';
import NavMenu from '../NavComponents/NavMenu.jsx';
import NavSocial from '../NavComponents/NavSocial.jsx';
import './NavCollapse.css';

import {GiHamburgerMenu, GoX} from 'react-icons/gi';

const NavCollapse = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='NavCollapse'>

      <div className='nav-collapse-header'>
        <button className='nav-ham-btn' onClick={toggleMenu}>
          <GiHamburgerMenu size={60}
            style={showMenu ?
            {transform: 'rotate(90deg)'} : {transform: 'rotate(0deg)'}} />
        </button>
        <NavSocial />
      </div>

      {
        showMenu ?
        <div className='nav-collapse-menu' onClick={toggleMenu}>
          <NavMenu />
        </div> : null
      }
    </div>
  );
};

export default NavCollapse;
