import datas from "@/assets/data/data.json";
import Card from "./Card";

function Gallery() {
  return (
    <section className="gallery">
      {datas.map((data) => (
        <Card key={`${data.id}-${data.title}`} title={data.title} />
      ))}
    </section>
  );
}
export default Gallery;
