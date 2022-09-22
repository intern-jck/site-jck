import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

const MENU_ITEMs = [
  ['Mechatronics', '/mecha'],
  ['Photos', '/photos'],
  ['Code', '/code'],
  ['Contact', '/contact'],
];

const NavMenu = () => {
  return (
    <div className='NavMenu'>
      <ul>
        {
          MENU_ITEMs.map((link, i) => (
            <li key={i}>
              <NavLink to={link[1]}>
                {link[0]}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default NavMenu;
