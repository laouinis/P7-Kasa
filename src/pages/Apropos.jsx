/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import Collapse from '../components/Collapse';
import CollapseData from '../data/collapse.json';
import Banner from '../components/Banner';
import banner2 from '../assets/banner2.png';
import '../styles/App.css';

function Apropos() {
  return (
    <section className='container'>
      <div className="footer-banner-image">
        <React.Fragment>
          <Banner image={banner2} showText={false}/>
          <main className='accordion'>
            {CollapseData.map((item, index) => (
              <Collapse key={index} {...item} />
            ))}
          </main>
        </React.Fragment>
      </div>
    </section>

  );
}

export default Apropos;
