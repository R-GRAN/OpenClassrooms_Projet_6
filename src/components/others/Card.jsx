function Card(props) {
  const { accommodation } = props;

  return (
 
      <article className="card">
        <img />
        <h2>{accommodation.title}</h2>
      </article>

  );
}

export default Card;
