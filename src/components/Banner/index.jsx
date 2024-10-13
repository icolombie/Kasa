import React from "react";
import PropTypes from "prop-types";

const Banner = ({ imageUrl, text, styleType }) => (
  <div
    className={`banner ${styleType}`}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {text && <div className="banner-text">{text}</div>}
  </div>
);

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string,
  styleType: PropTypes.string,
};

export default Banner;
