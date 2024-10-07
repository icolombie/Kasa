import React, { useState } from 'react';
import upArrow from '../../assets/up-arrow.png';
import downArrow from '../../assets/down-arrow.png';



const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <h2 onClick={toggleCollapse} className="collapse-title">
        {title}
        <img
          src={isOpen ? downArrow : upArrow}
          alt={isOpen ? 'Collapse' : 'Expand'}
          className="collapse-arrow"
        />
      </h2>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;