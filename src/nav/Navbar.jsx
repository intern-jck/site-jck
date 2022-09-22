import React, {useState, useEffect, useContext} from 'react';
// import NavBrand from './NavComponents/NavBrand.jsx';
// import NavMenu from './NavComponents/NavMenu.jsx';
// import NavSocial from './NavComponents/NavSocial.jsx';
// import NavCollapse from './NavCollapse/NavCollapse.jsx';

import NavFull from './NavFull/NavFull.jsx';
import NavCollapse from './NavCollapse/NavCollapse.jsx';

import './Navbar.css';
import useWindowSize from '../hooks/WindowContext/useWindowSize.js';

const Navbar = () => {
  const {width, height, orientation} = useWindowSize();
  return (
    <div className='Navbar'>
      {
        width > 1400 ?
          <NavFull /> :
          <NavCollapse />
      }
    </div>
  );
};

export default  Navbar;
