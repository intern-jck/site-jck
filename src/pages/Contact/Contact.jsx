import React from 'react';
import {Link} from "react-router-dom";
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import './Contact.css';
import NavSocial from '../../nav/NavComponents/NavSocial.jsx';

const contactImgUrl = 'https://iili.io/6KwZwG.jpg';

const Contact = () => {
  return (
    <div className='Contact'>
      <h1 className='page-header'>Contact</h1>
      <div className='contact-img'>
        <img src={contactImgUrl} />
      </div>
      <h2>Social</h2>
      <div className='contact-icons'>
        <a href='https://github.com/intern-jck' target='_blank' rel='noreferrer'>
          <FaGithub className='nav-icons' size={60}/>
        </a>
        <a href='https://www.linkedin.com/in/justinckirk/' target='_blank' rel='noreferrer'>
          <FaLinkedin className='nav-icons' size={60}/>
        </a>
        <a href='https://www.instagram.com/makerinchief/' target='_blank' rel='noreferrer'>
          <FaInstagram className='nav-icons' size={60}/>
        </a>
      </div>
      <div className='contact-email'>
        <Link
          to='#'
          onClick={() => window.location = 'mailto:justin.c.kirk@gmail.com'}>
          Click here to send me an e-mail!
        </Link>
      </div>
    </div>
  );
};

export default Contact;
