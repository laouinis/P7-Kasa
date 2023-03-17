/* eslint-disable require-jsdoc */
import React from 'react';
import banner from '../assets/banner1.png';
import PropTypes from 'prop-types';

function Banner(props) {
  return (
    <div className='kasa-body'>
      <div className='banner-img'>
        {props.showText && (
          <p style={{
            backgroundImage: `url(${(props.image || banner)})`,
          }}>Chez vous, partout et ailleurs</p>
        )}
        {!props.showText && (
          <div style={{
            backgroundImage: `url(${(props.image || banner)})`,
          }} />
        )}
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


