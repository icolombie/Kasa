import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ imageUrl, text }) => (
  <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
    {text && <div className="banner-text">{text}</div>}
  </div>
);

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string,
};


export default Banner;