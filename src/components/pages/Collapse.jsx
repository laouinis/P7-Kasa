/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import {useState} from 'react';
import '../sass/styles.scss';
const icon = <i className="fa-solid fa-chevron-up"></i>;

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
