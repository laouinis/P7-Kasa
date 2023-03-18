/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';

function Tag({logement}) {
  const tagMap = logement.tags.map((event, index) => (
    <div className="container-tag" key={event}>
      {logement.tags[index]}
    </div>
  ));

  return (
    <div className="tag">{tagMap}</div>
  );
}

Tag.propTypes = {
  logement: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Tag;
