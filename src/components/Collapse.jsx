/* eslint-disable react/prop-types */
import React from 'react';
import {useState} from 'react';
import '../styles/App.css';
const icon = <i className="fa-solid fa-chevron-up"></i>;

/**
 * A component for collapsing/expanding content
    with a title and a content section
 * @param {string} title - The title of the collapsed section
 * @param {string} content - The content to display when the section is expanded
 * @param {boolean} about - A boolean to indicate
    if the component is used in an "About" page
 * @return {JSX.Element} - The Collapse component
*/
function Collapse({title, content, about}) {
  const [isActive, setActive] = useState(false);
  const chevronState = () => {
    setActive(!isActive);
  };

  return (
    <div className={`${about ? 'about-collapse-container' :
      `collapse-container`} ${isActive && 'active'}`}>
      <div className='accordion-title' onClick={chevronState}>
        {title} <div>{icon}</div>
      </div>
      <div className='accordion-content'>{content}</div>
    </div>
  );
}

export default Collapse;
