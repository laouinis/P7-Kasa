/* eslint-disable require-jsdoc */
import React from 'react';
import {Link} from 'react-router-dom';
import '../sass/_header.scss';
import logo from '../assets/LOGO.png';

function Header() {
  return (
    <header className='header'>
      <Link to="/">
        <img src={ logo } alt='logo kasa' className='kasa-logo-img' />
      </Link>
      <ul className="nav-bar">
        <Link to="/" title='Redirection page'>
          <span className='text'>Accueil</span>
        </Link>
        <Link to="/Apropos">
          <span className='text'>Á propos</span>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
