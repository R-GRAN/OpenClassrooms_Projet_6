import Card from "./Card";

function Gallery({ accommodations }) {
  return (
    <section className="gallery">
      {accommodations.map((accommodation) => (
        <Card key={accommodation.id} accommodation={accommodation} />
      ))}
    </section>
  );
}


export default Gallery;