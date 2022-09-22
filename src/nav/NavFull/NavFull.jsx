import React from 'react';
import NavBrand from '../NavComponents/NavBrand.jsx';
import NavMenu from '../NavComponents/NavMenu.jsx';
import NavSocial from '../NavComponents/NavSocial.jsx';
import './NavFull.css';
import '../NavComponents/NavComponents.css';

const Navbar = () => {
  return (
    <div className='NavFull'>
      <NavBrand brandName={'JCK'} brandLink={'/'} />
      <NavMenu />
      <NavSocial />
    </div>
  );
};

export default  Navbar;
