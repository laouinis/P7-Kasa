/* eslint-disable require-jsdoc */
import React from 'react';
import Header from './Header';
import {Outlet} from 'react-router-dom';
// import Footer from './Footer';

function DefaultLayout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default DefaultLayout;
