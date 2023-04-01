import React from 'react';
import {Link} from 'react-router-dom';

/**
* Error component that displays a 404 page with an error message
  and a link to the homepage.
* @return {JSX.Element} - The error component.
*/
function Error() {
  return (
    <section className='container'>
      <div className='error'>
        <h1 className='error_title'>404</h1>
        <p className='error_text'>
        Oups! La page que vous demandez n&#39;existe pas.
        </p>
        <Link to="/" className='errorBack'>
        Retourner sur la page d&#39;accueil
        </Link>
      </div>
    </section>

  );
}

export default Error;
