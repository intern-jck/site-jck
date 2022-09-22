import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {GiHamburgerMenu, GoX} from 'react-icons/gi';

const NavMenu = () => {
  return (
    <div className='NavMenu'>
      <ul>
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='mecha'>
            Mechatronics
          </NavLink>
        </li>
        <li>
          <NavLink to='photos'>
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink to='code'>
            Code
          </NavLink>
        </li>
        <li>
          <NavLink to='contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
