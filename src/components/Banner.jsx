/* eslint-disable require-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';

function Banner(props) {
  console.log(props);
  return (
    <div className='kasa-body'>
      <div className='banner'>
        <div className='banner-img' style={{backgroundImage:
          `url(${props.image})`}}></div>
        {props.showText &&
        <p className='banner-text'>Chez vous, partout et ailleurs</p>}
      </div>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string,
  showText: PropTypes.bool.isRequired,
};

Banner.defaultProps = {
  showText: true,
};

export default Banner;


