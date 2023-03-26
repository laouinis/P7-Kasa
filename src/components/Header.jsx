/* eslint-disable require-jsdoc */
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/LOGO.png';

function Header() {
  return (
    <section className='container'>
      <header className='header'>
        <Link to="/">
          <img src={ logo } alt='logo kasa' className='kasa-logo-img' />
        </Link>
        <ul className="nav-bar">
          <Link to="/" title='Redirection page'>
            <span>Accueil</span>
          </Link>
          <Link to="/Apropos">
            <span className='text'>A Propos</span>
          </Link>
        </ul>
      </header>
    </section>

  );
}

export default Header;
