import { Link } from "react-router-dom";

function Card({ accommodation }) {
  return (
    <Link to={`/logement/${accommodation.id}`}>
      <article className="card">
        <img src={accommodation.cover} alt="image de l'appartement" />
        <div className="card_title">
          <h2>{accommodation.title}</h2>
        </div>
      </article>
    </Link>
  );
}

export default Card;
