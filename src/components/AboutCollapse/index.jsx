import React, { useState } from 'react';
import upArrow from '../../assets/up-arrow.png';
import downArrow from '../../assets/down-arrow.png';



const AboutCollapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about_collapse-container">
      <h2 onClick={toggleCollapse} className='about_collapse-title'>
        {title}
        <img
          src={isOpen ? downArrow : upArrow}
          alt={isOpen ? 'Collapse' : 'Expand'}
          className="collapse-arrow"
        />
      </h2>
      {isOpen && <div className="about_collapse-content">{children}</div>}
    </div>
  );
};

export default AboutCollapse;