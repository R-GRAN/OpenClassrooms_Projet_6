function Banner({ picture, text }) {
  return (
    <div className="banner">
      <img src={picture} alt="" />
      <div className="banner_title">
        <h1>{text}</h1>
      </div>
    </div>
  );
}


export default Banner;