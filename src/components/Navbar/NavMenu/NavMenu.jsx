import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './NavMenu.css';

const NavMenu = ({menuHandler}) => {
  return (
    <div className='NavMenu'>
      <ul>
        <li className='nav-menu-item'>
          <NavLink to='/mecha' onClick={menuHandler}>
            Mechatronics
          </NavLink>
        </li>
        <li className='nav-menu-item' onClick={menuHandler}>
          <NavLink to='/photos'>
            Photos
          </NavLink>
        </li>
        <li className='nav-menu-item' onClick={menuHandler}>
          <NavLink to='/code'>
            Code
          </NavLink>
        </li>
        {/* <li className='nav-menu-item' onClick={menuHandler}>
          <NavLink to='/music'>
            Music
          </NavLink>
        </li> */}
        {/* <li className='nav-menu-item' onClick={menuHandler}>
          <NavLink to='/about'>
            About
          </NavLink>
        </li> */}
        <li className='nav-menu-item' onClick={menuHandler}>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;

NavMenu.propTypes = {
  menuHandler: PropTypes.func,
};
