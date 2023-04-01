import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component that displays tags.
 * @param {object} props - The component props.
 * @param {array} props.tags - An array of strings representing
    the tags to be displayed.
 * @return {JSX.Element} - The tag component.
*/
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
