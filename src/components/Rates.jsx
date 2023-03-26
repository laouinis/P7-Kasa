/* eslint-disable require-jsdoc */

import React from 'react';
import PropTypes from 'prop-types';
import Star from '../assets/Star.png';
import StarEmpty from '../assets/StarEmpty.png';
function Rate({logement}) {
  const ratingScore = [1, 2, 3, 4, 5];
  return (
    <div>
      {ratingScore.map((ratingElem) =>

        logement >= ratingElem ? (
          <img
            src={Star}
            key={ratingElem.toString()}
            alt='filled star'
          />
        ) : (
          <img
            src={StarEmpty}
            key={ratingElem.toString()}
            alt='empty star'
          />
        ),
      )}
    </div>
  );
}

Rate.propTypes = {
  logement: PropTypes.number,
};

export default Rate;
