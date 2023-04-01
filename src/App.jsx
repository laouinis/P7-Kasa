/* eslint-disable require-jsdoc */

import React from 'react';
// import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Router from './routes/Index';
import './styles/normalize.css';
import './styles/App.css';

function App() {
  return (
    <>
      <div className='main-container'>
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
