import React, { useState } from "react";
import upArrow from "../../assets/up-arrow.png";
import downArrow from "../../assets/down-arrow.png";
import PropTypes from "prop-types";

const Collapse = ({ title, children, styleType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <h2 onClick={toggleCollapse} className={`collapse-title ${styleType}`}>
        {title}
        <img
          src={isOpen ? downArrow : upArrow}
          alt={isOpen ? "Collapse" : "Expand"}
          className="collapse-arrow"
        />
      </h2>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styleType: PropTypes.string,
};

export default Collapse;
