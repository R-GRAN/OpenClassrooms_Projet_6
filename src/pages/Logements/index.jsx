import { useParams } from "react-router-dom";
import accommodations from "@/assets/data/accommodations.json";
import Caroussel from "@/components/others/Caroussel";
import Rating from "@/components/others/Rating";

function Logements() {
  const { accommodationNumber } = useParams();

  const accommodation = accommodations[accommodationNumber - 1];

  return (
    <div className="logements">
      <Caroussel />
      <div>
        <h2>{accommodation.title}</h2>
        <p>{accommodation.location}</p>
        <span>{accommodation.tags}</span>
        <span>{accommodation.rating}</span>
        <Rating accommodation={accommodation} />
      </div>
    </div>
  );
}

export default Logements;
