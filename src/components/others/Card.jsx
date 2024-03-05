

function Card(props) {
  const { accommodation } = props;

  console.log(accommodation);

  return (

      <article className="card">
        <img src={accommodation.cover} />
        <h2>{accommodation.title}</h2>
      </article>

  );
}

export default Card;
