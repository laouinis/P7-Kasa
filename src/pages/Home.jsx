/* eslint-disable require-jsdoc */
import React from 'react';
import {Link} from 'react-router-dom';
import LogementData from '../data/logementsList.json';
import Banner from '../components/Banner';
import banner1 from '../assets/banner1.png';

function Home() {
  return (
    <section className='gallery'>
      <Banner image={banner1} />

      <div className='images_gallery'>
        {LogementData.map((logement) => (
          <Link key={logement.id} to={`/LogementFile/${logement.id}`}>
            <div className='key-box'
              style={{
                backgroundImage:
                `linear-gradient(180deg, rgba(255 ,255, 255, 0) 0%,
                rgba(0, 0, 0, 0.5) 100%),
                url(${(logement.cover)})`,
              }}>
              <p className='title-box'>{logement.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
