import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

const NavSocial = () => {
  return (
    <div className='NavSocial'>
      <a href='https://github.com/intern-jck' target='_blank'>
        <FaGithub size={60}/>
      </a>
      <a href='https://www.linkedin.com/in/justinckirk/' target='_blank'>
        <FaLinkedin size={60}/>
      </a>
      <a href='https://www.instagram.com/makerinchief/' target='_blank'>
        <FaInstagram size={60}/>
      </a>
    </div>
  );
};

export default NavSocial;
