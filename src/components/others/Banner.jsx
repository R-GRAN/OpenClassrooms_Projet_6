import PropTypes from "prop-types";

function Banner({text}) {
  return (
    <div className="banner">
      <h1 >{text}</h1>
    </div>
  );
}

Banner.propTypes = {
  text: PropTypes.string,
};

export default Banner;
