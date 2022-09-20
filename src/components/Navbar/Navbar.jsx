import React, {useState, useEffect, useContext} from 'react';
import NavBrand from './NavComponents/NavBrand.jsx';
import NavMenu from './NavComponents/NavMenu.jsx';
import NavSocial from './NavComponents/NavSocial.jsx';
import NavMenuCollapse from './NavComponents/NavMenuCollapse.jsx';

import './Navbar.css';
import useWindowSize from '../../hooks/WindowContext/useWindowSize.js';

const Navbar = () => {
  const {width, height, orientation} = useWindowSize();
  return (
    <div className='Navbar'>
      {
        width > 1400 ?
          <>
            <NavBrand brandName={'JCK'} brandLink={'/'} />
            <NavMenu />
            <NavSocial />
          </> :
          <NavMenuCollapse />
      }
    </div>
  );
};

export default  Navbar;
