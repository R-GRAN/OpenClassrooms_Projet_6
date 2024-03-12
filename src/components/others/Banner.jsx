import PropTypes from "prop-types";

function Banner({text}) {
  return (
    <div>
      <h1 className="banner">{text}</h1>
    </div>
  );
}

Banner.propTypes = {
  text: PropTypes.string,
};

export default Banner;
