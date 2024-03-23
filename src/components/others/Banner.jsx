function Banner({ picture, text }) {
  return (
    <div className="banner">
      <img src={picture} alt="une image d'arriere plan" />
      <div className="banner_title">{text ? <h1>{text}</h1> : null}</div>
    </div>
  );
}

export default Banner;
