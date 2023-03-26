/* eslint-disable require-jsdoc */

import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import LogementData from '../data/logementsList.json';
import Collapse from '../components/Collapse';
import Tags from '../components/Tags';
import Rate from '../components/Rates';
import Error from './Error';

function Logement() {
  const [logement, setLogement] = useState({
    tag: [],
    equipments: [],
    pictures: [],
    rating: '',
    host: {name: '', picture: ''},
  });

  const {id} = useParams();
  useEffect(() => {
    LogementData.map((house) => {
      if (house.id === id) {
        setLogement(house);
      }
      return null;
    });
  }, [id]);
  if (logement.title === undefined) {
    return <Error />;
  }

  const logementDescription = logement.description;
  const logementTitle = logement.title;
  const logementEquipments = logement.equipments;
  const logementLocation = logement.location;
  const logementHostName = logement.host.name;
  const logementHostPicture = logement.host.picture;
  const logementRating = Number(logement.rating);
  const mapLogementEquipment = logementEquipments.map((l, index) => (
    <p className='logement-equipment-p'
      key={index}>{logement.equipments[index]}</p>
  ));

  return (
    <section className='container'>
      <div className='container-logement'>
        <figure className='container-logement-info'>
          <div className="logement-info">
            <h1>{logementTitle}</h1>
            <h2>{logementLocation}</h2>
            <div className="container-tags">
              <Tags logement={logement} />
            </div>
          </div>

          <figcaption className='container-more-info'>
            <div className="logement-host-name-picture">
              <h3 className='logement-host-name'>{logementHostName}</h3>
              <img className='host-picture'
                src={logementHostPicture}
                alt="pict of the host"
              />
            </div>

            <div className="logement-rating">
              <Rate logement={logementRating} />
            </div>
          </figcaption>
        </figure>

        <div className="logement-collapse">
          <Collapse className='logement-collapse-item'
            about={false}
            title='Description'
            content={logementDescription} />

          <Collapse className='logement-collapse-item'
            about={false}
            title='Equipments'
            content=
              {<div className='collapse-equipments'>
                {mapLogementEquipment}
              </div>}
          />
        </div>
      </div>
    </section>

  );
}

export default Logement;
