/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import data from '../data/logementsList.json';
import Error from './Error';

function LogementsFile() {
  const {id} = useParams();
  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    ratings: '',
    host: {name: '', picture: ''},
  });

  useEffect(() => {
    data.map((house) => {
      if (house.id === id) {
        setLogement(house);
      }
      return null;
    });
  }, [id]);

  if (logement.title === undefined) {
    return <Error />;
  }

  const title = 'test';
  return (
    <div>{title}</div>
  );
};

export default LogementsFile;
