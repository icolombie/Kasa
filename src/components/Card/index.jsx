import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Card = ({ id, image, title }) => {
  return (
    <Link to={`/location/${id}`} id={id} className="card">
      <div
        className="card_img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="card_title">{title}</p>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
