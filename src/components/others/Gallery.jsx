import Card from "./Card";
import PropTypes from "prop-types";

function Gallery({ accommodations }) {
  return (
    <section className="gallery">
      {accommodations.map((accommodation) => (
        <Card key={accommodation.id} accommodation={accommodation} />
      ))}
    </section>
  );
}

Gallery.propTypes = {
  accommodations: PropTypes.array,
};
export default Gallery;
