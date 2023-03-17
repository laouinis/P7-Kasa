/* eslint-disable require-jsdoc */
import React from 'react';
import Header from '../pages/Header';
import {Outlet} from 'react-router-dom';
import Footer from '../pages/Footer';

function DefaultLayout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default DefaultLayout;
