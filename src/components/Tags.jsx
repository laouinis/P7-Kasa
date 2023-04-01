/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';

function Tag({tags}) {
  const tagMap = tags.map((event, index) => (
    <div className="container-tag" key={event}>
      {tags[index]}
    </div>
  ));

  return (
    <div className="tag">{tagMap}</div>
  );
}

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tag;
