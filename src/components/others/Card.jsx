function Card(props) {
  function handleClick(evt) {
    evt.preventDefault();
    console.log("Hello");
  }
  return (
    <article className="card" onClick={(evt) => handleClick(evt)}>
      <img src={props.cover} alt="" />
      <h2>{props.title}</h2>
    </article>
  );
}

export default Card;
