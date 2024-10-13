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

export default Card;
