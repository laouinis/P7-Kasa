import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import data from '../data/logementsList.json';
import 'react-slideshow-image/dist/styles.css';
import '../sass/_slideshow.scss';

/**
 * Component for displaying a slideshow of pictures for a given rental property.
 * @return {JSX.Element} - The Slideshow component.
*/
function Slideshow() {
  const [logement, setLogement] = useState({
    tags: [],
    equipment: [],
    pictures: [],
    rating: '',
    host: {name: '', picture: ''},
  });
  const {id} = useParams();

  useEffect(() => {
    data.map((house) => {
      if (house.id === id) {
        setLogement(house);
      }
      return null;
    });
  }, [id]);

  const [current, setCurrent] = useState(0);
  const length = logement.pictures.length;
  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };
  const previousSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  };
  if (logement.pictures.length <=0) {
    return null;
  }

  let chevron = 'arrow';
  let slideNumber = 'slide-number';
  if (logement.pictures.length === 1) {
    chevron = 'mayBeHide';
    slideNumber = 'mayBeHide';
  }
  return (
    <section className='container'>
      <section className="section-slider">
        <div className="slider">
          {logement.pictures.map((picture, index) => {
            return (
              <div
                className={index === current ? 'slide active' :
              'slide'} key={index}>
                {index === current && (
                  <div className='slider-image' style={{
                    backgroundImage: `url(${logement.pictures[index]})`,
                  }}
                  >
                    <FiChevronLeft className={chevron}
                      onClick={previousSlide} />
                    {index === current && (
                      <span className={slideNumber}>
                        {current + 1}/{length}
                      </span>
                    )}
                    <FiChevronRight
                      className={chevron}
                      onClick={nextSlide} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Slideshow;
