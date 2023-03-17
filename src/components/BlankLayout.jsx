import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../pages/Header';

const LayoutError = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export default LayoutError;
