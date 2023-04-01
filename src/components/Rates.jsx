/* eslint-disable require-jsdoc */

import React from 'react';
import PropTypes from 'prop-types';
import Star from '../assets/Star.png';
import StarEmpty from '../assets/StarEmpty.png';
function Rate({rating}) {
  const ratingScore = [1, 2, 3, 4, 5];
  console.log(rating);
  return (
    <div>
      {ratingScore.map((ratingElem) =>

        rating >= ratingElem ? (
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
  rating: PropTypes.number,
};

export default Rate;
