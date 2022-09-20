import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import './Contact.css';

const contactImgUrl = 'https://iili.io/6KwZwG.jpg';

const Contact = () => {
  return (
    <div className='Contact'>
      <h1>Contact</h1>
      <h2>Get in touch via social</h2>
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
      <div className='contact-img'>
        <img src={contactImgUrl} />
      </div>
    </div>
  );
};

export default Contact;
