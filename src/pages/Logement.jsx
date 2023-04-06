import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import LogementData from '../data/logementsList.json';
import Collapse from '../components/Collapse';
import Tags from '../components/Tags';
import Rate from '../components/Rates';

/**
 * React component to display Logement details
 * @Function
 * @return {JSX.Element}
 */
function Logement() {
  const [logement, setLogement] = useState({
    tags: [],
    title: '',
    equipments: [],
    pictures: [],
    rating: 0,
    host: {name: '', picture: ''},
    description: '',
    location: '',
  });

  const [isError, setIsError]= useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(LogementData) && LogementData.length > 0) {
      const house = LogementData.find((house) => house.id === id);
      if (house) {
        setLogement(house);
      } else {
        setIsError(true);
      }
    }
  }, [id]);

  useEffect(() => {
    if (isError) {
      navigate('/Error');
    }
  }, [isError, navigate]);

  return (
    <section className='container'>
      <div className='container-logement'>
        <figure className='container-logement-info'>
          <div className="logement-info">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <div className="container-tags">
              <Tags tags={logement.tags} />
            </div>
          </div>

          <figcaption className='container-more-info'>
            <div className="logement-host-name-picture">
              <h3 className='logement-host-name'>{logement.host.name}</h3>
              <img className='host-picture'
                src={logement.host.picture}
                alt="pict of the host"
              />
            </div>

            <div className="logement-rating">
              <Rate rating={parseInt(logement.rating)} />
            </div>
          </figcaption>
        </figure>

        <div className="logement-collapse">
          <Collapse className='logement-collapse-item'
            about={false}
            title='Description'
            content={logement.description} />

          <Collapse className='logement-collapse-item'
            about={false}
            title='Équipements'
            content=
              {<div className='collapse-equipments'>
                <ul className="equipments-list">
                  {logement.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              </div>}
          />
        </div>
      </div>
    </section>
  );
}

export default Logement;
