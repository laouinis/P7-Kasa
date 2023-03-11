/* eslint-disable require-jsdoc */
import React from 'react';
import {Link} from 'react-router-dom';
import '../sass/_error.scss';

function Error() {
  return (
    <section className='error'>
      <h1 className='error_title'>404</h1>
      <p className='error_text'>
        Oups! La page que vous demandez n&#39;existe pas.
      </p>
      <Link to="/" className='errorBack'>
        Retourner sur la page d&#39;accueil
      </Link>
    </section>
  );
}

export default Error;
