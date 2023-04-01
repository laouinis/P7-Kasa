import React from 'react';
import logoFooter from '../assets/LOGO.png';

/**
 * Component for the website footer.
 * @return {JSX.Element} The rendered Footer component
*/
function Footer() {
  return (
    <footer className='footer'>
      <img src={ logoFooter }
        alt="kasa logo footer"
        className='logo-kasa-footer'
      />
      <div className="footer-text">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
