function Rating(props) {
  const { accommodation } = props;
  const rateValue = accommodation.rating;

  const range = [1, 2, 3, 4, 5];

  return (
    <div>
      {range.map((rangeElem) =>
        rateValue >= rangeElem ? (
          <span key={rangeElem.toString()}>*</span>
        ) : null
      )}
    </div>
  );
}

export default Rating;