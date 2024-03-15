import PropTypes from "prop-types";

function Rating({ rating }) {
  const rateValue = rating;

  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((rangeElem) =>
        rateValue >= rangeElem ? (
          <span className="on" key={rangeElem.toString()}>
            <i className="fa-solid fa-star"></i>
          </span>
        ) : (
          <span key={rangeElem.toString()} className="off">
            <i className="fa-solid fa-star"></i>
          </span>
        )
      )}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string,
};

export default Rating;
