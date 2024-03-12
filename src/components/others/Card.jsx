import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ accommodation }) {
  return (
    <Link to={`/logement/${accommodation.id}`}>
      <article className="card">
        <img src={accommodation.cover} />
        <h2>{accommodation.title}</h2>
      </article>
    </Link>
  );
}
Card.propTypes = {
  accommodation: PropTypes.object,
};
export default Card;
