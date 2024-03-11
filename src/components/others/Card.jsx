import { Link } from "react-router-dom";

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

export default Card;
