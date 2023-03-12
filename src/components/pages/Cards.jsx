/* eslint-disable require-jsdoc */
import React from 'react';
import {Link} from 'react-router-dom';
import LogementData from '../data/logementsList.json';
import Banner from '../assets/banner1.png';
import '../sass/_cards.scss';

function Card() {
  return (
    <section className='gallery'>
      <div className='kasa-body'>
        <div className='banner-img'>
          <p style={{
            backgroundImage: `url(${(Banner)})`,
          }}>Chez vous, partout et ailleurs</p>
        </div>
      </div>
      <div className='images_gallery'>
        {LogementData.map((logement) => (
          <Link key={logement.id} to={`/LogementsFile/${logement.id}`}>
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

export default Card;
