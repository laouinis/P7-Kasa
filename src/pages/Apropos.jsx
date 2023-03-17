/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import Collapse from './Collapse';
import CollapseData from '../data/collapse.json';
// import Banner from './Banner';
import '../styles/App.css';

function Apropos() {
  return (
    <React.Fragment>
      {/* <Banner source='../assets/banner2.png' showText={false} /> */}
      <div className='banner'></div>
      <main className='accordion'>
        {CollapseData.map((item, index) => (
          <Collapse key={index} {...item} />
        ))}
      </main>
    </React.Fragment>
  );
}

export default Apropos;
