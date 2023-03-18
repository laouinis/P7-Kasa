/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
// import PropTypes from 'prop-types';

// function Tag({logement}) {
//   const tagMap = logement.tags.map((event, index) => (
//     <div className="tag_container" key={event}>
//       {logement.tags[index]}
//     </div>
//   ));

//   return (
//     <div className="tag">{tagMap}</div>
//   );
// }

// Tag.propTypes = {
//   logement: PropTypes.shape({
//     tags: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
// };

// export default Tag;


function Tag({logement}) {
  const tag = logement.tags;
  const tagMap = tag.map((evnt, index) => (

    <p className="tagParagraphe" key={evnt}>
      {logement.tags[index]}</p> // recupere l'index de tag
  ));
  return <div className="tag">{tagMap}</div>;
}

export default Tag;
