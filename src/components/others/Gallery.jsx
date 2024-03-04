import Card from "./Card";
import accommodations from "@/assets/data/accommodations.json";

function Gallery() {


  return (
    <section className="gallery">
      {accommodations.map((accommodation) => (
        <Card key={`${accommodation.id}-${accommodation.title}`} accommodation={accommodation} />
      ))}
    </section>
  );
}
export default Gallery;
