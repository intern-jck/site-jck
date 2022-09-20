import React, {useState, useEffect, useContext} from 'react';
import NavBrand from './NavComponents/NavBrand.jsx';
import NavMenu from './NavComponents/NavMenu.jsx';
import NavSocial from './NavComponents/NavSocial.jsx';
import NavMenuCollapse from './NavComponents/NavMenuCollapse.jsx';

import './Navbar.css';

import useWindowSize from '../../hooks/WindowContext/useWindowSize.js';

const NAV_MENU_LINKS = [
  ['Home', '/'],
  ['Mechatronics', 'mecha'],
  ['Photos', 'photos'],
  ['Code', 'code'],
  ['Contact', 'contact'],
  // ['R&D', 'randd'],
  // ['About', 'about'],
]

const Navbar = () => {
  const {width, height, orientation} = useWindowSize();
  return (
    <div className='Navbar'>
      {
        width > 1400 ?
          <>
            <NavBrand brandName={'JCK'} brandLink={'/'} />
            <NavMenu items={NAV_MENU_LINKS} />
            <NavSocial />
          </> :
          <NavMenuCollapse items={NAV_MENU_LINKS} />
      }
    </div>
  );
};

export default  Navbar;
