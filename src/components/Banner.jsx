import React from 'react';
import PropTypes from 'prop-types';

/**
* Banner component with a background image and optional text.
* @param {object} props - The component properties.
* @param {string} props.image - The URL of the banner background image.
* @param {boolean} [props.showText=true] - Indicates whether the banner text
  should be displayed or not. By default, the value is true.
* @return {JSX.Element} - The banner component.
*/
function Banner(props) {
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
