/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import data from '../data/logementsList.json';
// import Collapse from './Collapse';
import Tags from '../components/Tags';
import Error from './Error';

function Logement() {
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

  // const logementDescription = logement.description;
  // const logementDescription = logement.description;
  const logementTitle = logement.title;
  // const logementEquipments = logement.equipments;
  const logementLocation = logement.location;
  const logementHostName = logement.host.name;
  const logementHostPicture = logement.host.picture;
  // const logementRating = logement.rating; // quantité étoiles

  // map 1 valeur et l'index qui retourne dont l'attribue key est l) revoie des équipements sur logement.equipment du logement en question [index] //
  // const mapLogementEquipement = logementEquipments.map((l, index) => (
  //   <p className="pEquipementLogement" key={l}>
  //     {logement.equipments[index]}
  //   </p>
  // ));

  // /--  return()  --///
  return (
    <section>
      <figure className="infoLogementContainer">
        <div className="infoLogement">
          <h1>{logementTitle}</h1>
          <h2>{logementLocation}</h2>
          <div className="tagsContainer">
            <Tags logement={logement} />
          </div>
        </div>

        <figcaption className="moreInfoContainer">
          <div className="logementNamePicture">
            <h3 className="logementName">{logementHostName}</h3>
            <img
              className="logementHostPicture"
              src={logementHostPicture}
              alt="Portrait de l'annonceur"
            />
          </div>

          <div className="logementRating">
            {/* <Rate logement={logementRating} /> */}
          </div>
        </figcaption>
      </figure>

      {/* je donne à AccordionLogement le title et le content necessaire pour l'affichage */}
      {/* <div className="AccordionLogement">
        <Collapse
          about={false}
          title="Description"
          content={logementDescription}
        />
        <Collapse
          about={false}
          title="Equipements"
          content={<div className="equipments">{mapLogementEquipement}</div>}
        />
      </div> */}
    </section>
  );
}

export default Logement;
