/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import logoFooter from '../assets/LOGO.png';
import '../sass/_footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <img src={ logoFooter } alt="kasa logo footer" className='logo-kasa-footer' />
      <div className="footer-text">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
