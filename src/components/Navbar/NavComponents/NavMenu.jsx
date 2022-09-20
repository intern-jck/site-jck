import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

const NavMenu = ({items}) => {
  console.log(items)
  return (
    <div className='NavMenu'>
      <ul>
        {
          items.map((link, i) => (
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
