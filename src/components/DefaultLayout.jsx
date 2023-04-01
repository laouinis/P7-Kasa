import React from 'react';
import Header from './Header';
import {Outlet} from 'react-router-dom';

/**
 * The DefaultLayout component is responsible
 * for rendering the layout of the website
 * @return {JSX.Element} The JSX code for rendering the layout
*/
function DefaultLayout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export default DefaultLayout;
