import PropTypes from "prop-types";

function Rating({ rating }) {
  const rateValue = rating;

  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((rangeElem) =>
        rateValue >= rangeElem ? (
          <span className="on" key={rangeElem.toString()}>
            *
          </span>
        ) : (
          <span key={rangeElem.toString()}>*</span>
        )
      )}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string,
};

export default Rating;
