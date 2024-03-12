import PropTypes from "prop-types";

function Tags({tags}) {
  return (
    <div>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.array,
};

export default Tags;
