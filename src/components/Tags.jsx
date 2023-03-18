/* eslint-disable require-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';

function Tag({logement}) {
  const tagMap = logement.tags.map((event, index) => (
    <div className="tag_container" key={event}>
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
    // Add PropTypes validation for other properties of 'logement' if needed
  }).isRequired,
};

export default Tag;
